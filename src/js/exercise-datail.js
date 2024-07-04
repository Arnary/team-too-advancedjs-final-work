import axios from 'axios';
import { axiosWrapper } from './utils/axiosWrapper';
import Modal from './Modal.class.js';

let modal = null;

const capitalize = (str = '') => {
  str = str.toString();
  return str?.charAt(0).toUpperCase() + str?.slice(1);
};

const ratingTemplate = rating => {
  rating = Number(rating);
  const icons = [...Array(5).keys()]
    .map(i => {
      return `
        <svg class="icon${i + 1 < rating ? ' filled' : ''}">
          <use href="./img/icons.svg#icon-star"></use>
        </svg>`;
    })
    .join('');

  return `
    <div class="rating">
      <div class="rating-value">${rating}</div>
      ${icons}
    </div>
  `;
};

const detailActionBtnsTemplate = isFav => {
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
};

const detailTemplate = data => {
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
        <h3 class="modal-title">${title}</h3>
          ${ratingTemplate(rating)}
        <hr/>
        <ul class="char-list">
          ${charListTemplate}
        </ul>
        <hr/>
        <p>${description}</p>
      </div>
    </div>
    <div class="modal-action">
      ${detailActionBtnsTemplate(isFav)}
    </div>`;
};

const lsToggleFavItem = item => {
  let favorites_list = JSON.parse(localStorage.getItem('favorites')) ?? [];
  const itemIndex = favorites_list.findIndex(({ _id }) => _id === item?._id) > -1;

  if (itemIndex) {
    item.isFav = false;
    favorites_list = favorites_list.splice(itemIndex, 1);
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
      const actionsRef = modal?.$el.querySelector('.modal-action');

      if (!!actionsRef) {
        actionsRef.innerHTML = detailActionBtnsTemplate(item.isFav);
      }
    } else if ('rating' in event.target.dataset) {
      console.log('rating');
    }
  };
};

export default async () => {
  modal = new Modal({ className: 'exercise-detail' });

  const exerciseItems = document.querySelector('.exercise-list');

  exerciseItems.addEventListener('click', async function (event) {
    const favorites_list = JSON.parse(localStorage.getItem('favorites')) ?? [];
    const isFav = favorites_list.findIndex(({ _id }) => _id === id) > -1;

    if (!event.target.dataset.id) {
      return;
    }
    const { id } = event.target.dataset;

    modal.itemId = () => id;
    modal.open();

    try {
      const exercise = await axios.get(`https://your-energy.b.goit.study/api/exercises/${id}`).then(res => {
        return { ...res.data, isFav };
      });

      modal.body = detailTemplate(exercise);

      const handler = modalBtnClickHandler(exercise);
      modal.$el.addEventListener('click', handler);

      modal.onhide = () => {
        modal.$el.removeEventListener('click', handler);
      };
    } catch (error) {
      console.error(error);
    }
  });

  return { modal };
};
