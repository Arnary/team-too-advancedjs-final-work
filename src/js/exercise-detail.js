import Modal from './Modal.class.js';
import { axiosWrapper } from './utils/axiosWrapper.js';

const $axios = new axiosWrapper();
let modal = null;

class ExerciseModal extends Modal {
  itemID;
  constructor(options) {
    super(options);
    this.itemID = options.itemID;
  }

  close() {
    super.close();
    this.itemID = null;
  }
}

const capitalize = (str = '') => {
  str = str.toString();
  return str?.charAt(0).toUpperCase() + str?.slice(1);
};

const templates = {
  ratingTemplate: rating => {
    const icons = [...Array(5).keys()]
      .map(i => {
        return `
          <svg class="icon${i + 1 <= rating ? ' filled' : ''}">
            <use href="./img/icons.svg#icon-star"></use>
          </svg>`;
      })
      .join('');

    return `
      <div class="rating">
        <div class="rating-value">${rating.toFixed(1)}</div>
        ${icons}
      </div>
    `;
  },
  detailActionBtnsTemplate: isFav => {
    const title = isFav ? 'Remove from favorites' : 'Add to favorites';
    const status = isFav ? 'del' : 'add';
    const icon = isFav ? 'trash' : 'heart';

    return `
      <button
        data-fav-${status}
        type="button"
        class="btn"
        >
        ${title}
        <svg class="icon">
          <use href="./img/icons.svg#icon-${icon}"></use>
        </svg>
      </button>
      <button data-rating type="button" class="btn dark">Give a rating</button>`;
  },
  modalContent: data => {
    const { gifUrl, name, rating, description, isFav } = data;
    const title = capitalize(name);

    const charList = {
      target: 'Target',
      bodyPart: 'Body Part',
      equipment: 'Equipment',
      popularity: 'Popular',
      burnedCalories: 'Burned Calories',
    };

    const charListTemplate = Object.keys(charList)
      .map(key =>
        key in data
          ? `<li class="char-item">
              <h4 class="title">${charList[key]}</h4>
              <p class="description">${capitalize(data[key])}</p>
            </li>`
          : null
      )
      .filter(item => !!item)
      .join('');

    return `<div class="card">
        <img class="card-img" src="${gifUrl}" alt="${title}">
        <div class="card-body">
          <div class="card-header">
            <h3 class="card-title">${title}</h3>
            ${templates.ratingTemplate(rating)}
          </div>
          <ul class="char-list">
            ${charListTemplate}
          </ul>
          <p class="char-info">${description}</p>

        </div>
      </div>`;
  },
};

const lsToggleFavItem = item => {
  let favorites_list = JSON.parse(localStorage.getItem('favorites')) ?? [];
  const itemIndex = favorites_list.findIndex(({ _id }) => _id === item?._id);
  if (itemIndex > -1) {
    item.isFav = false;
    favorites_list.splice(itemIndex, 1);
  } else {
    item.isFav = true;
    favorites_list.push(item);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites_list));
};

const modalBtnClickHandler = item => {
  return event => {
    if ('favAdd' in event.target.dataset || 'favDel' in event.target.dataset) {
      lsToggleFavItem(item);
      const actionsRef = modal?.$el.querySelector('.modal-actions');

      if (!!actionsRef) {
        actionsRef.innerHTML = templates.detailActionBtnsTemplate(item.isFav);
      }
    }
  };
};

const initDetail = async () => {
  const BASE_URL = 'https://your-energy.b.goit.study/api/exercises/';
  modal = new ExerciseModal({ className: 'exercise-detail' });

  const exerciseList = document.querySelector('#exercises-list');

  exerciseList.addEventListener('click', async event => {
    if (!event.target.dataset.exerciseId) {
      return;
    }

    const { exerciseId: id } = event.target.dataset;

    modal.itemID = id;

    const favorites_list = JSON.parse(localStorage.getItem('favorites')) ?? [];
    const isFav = favorites_list.findIndex(({ _id }) => _id === id) > -1;

    // modal.body = 'Some loader >>>';
    modal.open();

    try {
      const exercise = await $axios.get(`${BASE_URL}${id}`);
      if (Object.keys(exercise).length === 0) {
        throw new Error();
      }

      exercise.isFav = isFav;
      modal.body = templates.modalContent(exercise);
      modal.actions = templates.detailActionBtnsTemplate(isFav);

      const handler = modalBtnClickHandler(exercise);
      modal.$el.addEventListener('click', handler);

      modal.onHide = () => {
        modal.$el.removeEventListener('click', handler);
      };
    } catch (error) {
      const errorDescription = $axios.describeError(error);
      console.error(errorDescription);
      modal.body = `<div style="color: red">${errorDescription}</div>`;
    }
  });

  return { modal };
};

export { initDetail, lsToggleFavItem };
