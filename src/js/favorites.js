import { capitalizeFirstLetter } from './utils/helpers.js';
import Pagination from './exercises/pagination.js';
import storedExcersises from './storedExcersises.js';

const emptyMessage = () =>
  `<span class="empty-favorites">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</span>`;

const exerciseTemplate = item => `
  <li class="exercise-card favorite-card" data-exercise-id="${item._id}">
    <div class="exercise-card-header">
      <span class="exercise-card-title">Workout</span>
      <button class="exercise-card-remove btn" type="button" data-fav-del>
        <svg class="icon">
          <use href="./img/icons.svg#icon-trash"></use>
        </svg>
      </button>
      <button class="exercise-card-start" data-exercise-id="${item._id}">
        Start
        <svg class="exercise-start-icon">
          <use href="./img/icons.svg#icon-arrow"></use>
        </svg>
      </button>
    </div>

    <div class="exercise-card-content">
      <img src="./img/figure.svg" alt="figure" class="exercise-name-icon" />
      <div class="exercise-card-name">
        ${capitalizeFirstLetter(item.name)}
      </div>
    </div>

    <div class="exercise-card-footer">
      <div class="exercise-card-detail">
        Burned calories: <span class="value">${item.burnedCalories}</span>
      </div>
      <div class="exercise-card-detail">
        Body part: <span class="value">${item.bodyPart}</span>
      </div>
      <div class="exercise-card-detail">
        Target: <span class="value">${item.target}</span>
      </div>
    </div>
  </li>`;

const store = new Proxy(
  {
    page: 1,
    itemsPerPage: window.innerWidth > 767 ? 10 : 8,
    showPagination: window.innerWidth < 1140,
  },
  {
    set(target, property, value) {
      target[property] = value;
      if (property === 'page') {
        renderList();
      }
      return true;
    },
  }
);

const listRef = document.querySelector('#exercises-list');
const totalPages = () => Math.ceil(storedExcersises.favoritesList.length / store.itemsPerPage);

const pagination = new Pagination('#exercises-pagination', async page => {
  store.page = page;
});

const getPaginatedItems = () => {
  if (window.innerWidth > 1140) {
    return storedExcersises.favoritesList;
  }

  const start = (store.page - 1) * store.itemsPerPage;
  const end = start + store.itemsPerPage;
  return storedExcersises.favoritesList.slice(start, end) ?? [];
};

function renderList() {
  let markup = emptyMessage();
  const items = getPaginatedItems();

  if (items.length) {
    markup = items.map(item => exerciseTemplate(item)).join('');
  }

  listRef.innerHTML = markup;

  if (store.showPagination) {
    pagination.render(store.page, totalPages());
  }
}

const removeExercise = id => {
  storedExcersises.favoritesList = storedExcersises.favoritesList.filter(item => item._id !== id);

  const items = getPaginatedItems();
  if (store.page > 1 && items.length === 0) {
    store.page -= 1;
  }
  renderList();
};

renderList();

listRef.addEventListener('click', event => {
  if ('favDel' in event.target.dataset) {
    const { exerciseId: id } = event.target.closest('.exercise-card')?.dataset;
    if (!id) {
      return;
    }

    removeExercise(id);
  }
});

export { removeExercise };
