import { capitalizeFirstLetter } from './utils/helpers.js';
import { lsToggleFavItem } from './exercise-detail';
import Pagination from './exercises/pagination.js';

const emptyMessage = () =>
  `It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.`;

const exerciseTemplate = item => `
  <div class="exercise-card" data-exercise-id="${item._id}">
    <header class="exercise-card-header">
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
    </header>

    <div class="exercise-card-content">
      <img src="./img/figure.svg" alt="figure" class="exercise-name-icon" />
      <div class="exercise-card-name">
        ${capitalizeFirstLetter(item.name)}
      </div>
    </div>

    <footer class="exercise-card-footer">
      <div class="exercise-card-detail">
        Burned calories: <span class="value">${item.burnedCalories}</span>
      </div>
      <div class="exercise-card-detail">
        Body part: <span class="value">${item.bodyPart}</span>
      </div>
      <div class="exercise-card-detail">
        Target: <span class="value">${item.target}</span>
      </div>
    </footer>
  </div>`;

const store = new Proxy(
  {
    page: 1,
    itemsPerPage: window.innerWidth > 767 ? 10 : 8,
    favoritesList: JSON?.parse(localStorage.getItem('favorites')) ?? [],
  },
  {
    set(target, property, value) {
      target[property] = value;
      if (property === 'page') {
        renderList();
      }

      if (property === 'favoritesList') {
        localStorage.setItem('favorites', JSON.stringify(value));
      }
      return true;
    },
  }
);

const totalPages = () => Math.ceil(store.favoritesList.length / store.itemsPerPage);

const pagination = new Pagination('#exercises-pagination', async page => {
  store.page = page;
});

const refs = {
  list: document.querySelector('#exercises-list'),
};

const getPaginatedItems = (list, page, items_per_page) => {
  const start = (page - 1) * items_per_page;
  const end = start + items_per_page;
  return list.slice(start, end) ?? [];
};

function renderList() {
  let markup = emptyMessage();
  const items = getPaginatedItems(store.favoritesList, store.page, store.itemsPerPage);
  if (items.length) {
    markup = items.map(item => exerciseTemplate(item)).join('');
  }

  refs.list.innerHTML = markup;

  pagination.render(store.page, totalPages());
}

renderList();

const removeExercise = id => {
  const itemRef = document.querySelector(`.exercise-card[data-exercise-id="${id}"]`);

  itemRef?.remove();

  const exercise = store.favoritesList.find(item => item._id === id) ?? {};
  lsToggleFavItem(exercise);
  store.favoritesList = store.favoritesList.filter(item => item._id !== id);

  const items = getPaginatedItems(store.favoritesList, store.page, store.itemsPerPage);
  if (store.page > 1 && items.length === 0) {
    store.page--;
  }
  renderList();
};

refs.list.addEventListener('click', event => {
  if ('favDel' in event.target.dataset) {
    const { exerciseId: id } = event.target.closest('.exercise-card')?.dataset;
    if (!id) {
      return;
    }

    removeExercise(id);
  }
});

export { removeExercise };
