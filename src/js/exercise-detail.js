import Modal from './Modal.class.js';
import { izi } from './utils/iziToast.js';
import { axiosWrapper } from './utils/axiosWrapper.js';
import storedExcersises from './storedExcersises.js';

const $axios = new axiosWrapper();
let modal = null;
let ratingModal = null;

const BASE_URL = 'https://your-energy.b.goit.study/api/exercises/';

class ExerciseModal extends Modal {
  constructor(options) {
    super(options);
    this.itemID = null;
  }

  async open(id) {
    this.itemID = id;
    super.open();
    await this.loadContent();
  }

  close() {
    super.close();
    this.itemID = null;
  }

  async loadContent() {
    if (!this.itemID) return;

    const favorites_list = JSON.parse(localStorage.getItem('favorites')) ?? [];
    const isFav = favorites_list.findIndex(({ _id }) => _id === this.itemID) > -1;

    try {
      const exercise = await $axios.get(`${BASE_URL}${this.itemID}`);
      if (Object.keys(exercise).length === 0) {
        throw new Error('No exercise data');
      }

      exercise.isFav = isFav;
      this.setContent(templates.modalContent(exercise));

      const handler = modalBtnClickHandler(exercise);
      this.$el.addEventListener('click', handler);

      this.onHide = () => {
        this.$el.removeEventListener('click', handler);
      };
    } catch (error) {
      const errorDescription = $axios.describeError(error);
      this.setContent(`<div style="color: red">${errorDescription}</div>`);
    }
  }

  setContent(content) {
    this.body = content;
  }
}

class RatingModal extends Modal {
  constructor(options) {
    super(options);
    this.originalContent = options.content;
    this.exerciseModal = options.exerciseModal;
    this.setContent(options.content);
  }

  setContent(content) {
    const modalBody = this.$el.querySelector('.modal-body');
    if (modalBody) {
      modalBody.innerHTML = content;
    } else {
      console.log('Error: Modal body not found');
    }
  }

  open(item) {
    this.currentItem = item;
    super.open();
    this.setContent(this.originalContent);
    this.setupEventListeners();
  }

  setupEventListeners() {
    const form = this.$el.querySelector('#ratingForm');
    const closeBtn = this.$el.querySelector('#closeModal');

    if (form) {
      form.addEventListener('submit', this.handleSubmit.bind(this));
    } else {
      console.log('Error: Rating form not found');
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', this.close.bind(this));
    } else {
      console.log('Error: Close button not found');
    }

    this.setupStarRating();
  }

  setupStarRating() {
    const stars = this.$el.querySelectorAll('.modal__rating-star');
    const ratingValue = this.$el.querySelector('.modal__rating-value');

    stars.forEach((star, index) => {
      star.addEventListener('mouseover', () => this.highlightStars(stars, index));
      star.addEventListener('mouseout', () => this.resetStars(stars));
      star.addEventListener('click', () => this.setRating(stars, index, ratingValue));
    });
  }

  highlightStars(stars, index) {
    stars.forEach((star, i) => {
      star.classList.toggle('active', i <= index);
    });
  }

  resetStars(stars) {
    const selectedIndex = Array.from(stars).findIndex(star => star.querySelector('input').checked);
    stars.forEach((star, i) => {
      star.classList.toggle('active', i <= selectedIndex && selectedIndex !== -1);
    });
  }

  setRating(stars, index, ratingValue) {
    stars.forEach((star, i) => {
      star.classList.toggle('active', i <= index);
      star.querySelector('input').checked = i === index;
    });
    ratingValue.textContent = (index + 1).toFixed(1);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const rating = formData.get('rating');
    const email = formData.get('email');
    const comment = formData.get('comment');

    try {
      await $axios.patch(`${BASE_URL}${this.currentItem._id}/rating`, {
        rate: Number(rating),
        email,
        review: comment
      });
      izi.Success('Rating submitted successfully');
      this.close();
    } catch (error) {
      izi.Error(`Error submitting rating: ${$axios.describeError(error)}`);
    }
  }

  close() {
    super.close();
    if (this.exerciseModal && this.currentItem) {
      this.exerciseModal.open(this.currentItem._id);
    }
    this.currentItem = null;
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
  let favorites_list = [...storedExcersises.favoritesList];
  const itemIndex = favorites_list.findIndex(({ _id }) => _id === item?._id);

  if (itemIndex > -1) {
    item.isFav = false;
    favorites_list = favorites_list.filter(i => i._id !== item._id);
  } else {
    item.isFav = true;
    favorites_list.push(item);
  }

  storedExcersises.favoritesList = favorites_list;
};

const modalBtnClickHandler = item => {
  return event => {
    const target = event.target.closest('button');
    if (!target) {
      console.log('No button target found');
      return;
    }

    if ('string' === typeof target.dataset.favAdd || 'string' === typeof target.dataset.favDel) {
      lsToggleFavItem(item);
      const actionsRef = modal?.$el.querySelector('.modal-actions');

      if (!!actionsRef) {
        actionsRef.innerHTML = templates.detailActionBtnsTemplate(item.isFav);
      }
    } else if (target.hasAttribute('data-rating')) {
      showRatingModal(item);
    } else {
      console.log('Unknown button clicked');
    }
  };
};

const showRatingModal = (item) => {
  if (!ratingModal) {
    const modalRoot = document.getElementById('ratingModalRoot');
    if (!modalRoot) {
      console.log('Error: Modal root not found');
      return;
    }
    ratingModal = new RatingModal({
      className: 'modal__window_rating',
      content: modalRoot.querySelector('.modal-body').innerHTML,
      exerciseModal: modal
    });
  }
  modal.close();
  ratingModal.open(item);
};

const initDetail = async () => {
  const BASE_URL = 'https://your-energy.b.goit.study/api/exercises/';
  modal = new ExerciseModal({ className: 'exercise-detail' });

  const exerciseList = document.querySelector('#exercises-list');

  exerciseList.addEventListener('click', async event => {
    const target = event.target.closest('button');

    if (!target.dataset.exerciseId) {
      return;
    }

    const { exerciseId: id } = target.dataset;

    modal.itemID = id;

    // modal.body = 'Some loader >>>';
    modal.open();

    try {
      const exercise = await $axios.get(`${BASE_URL}${id}`);
      if (Object.keys(exercise).length === 0) {
        izi.Error('Exercise not found');
        throw new Error();
      }

      exercise.isFav = storedExcersises.favoritesList.findIndex(({ _id }) => _id === id) > -1;
      modal.body = templates.modalContent(exercise);
      modal.actions = templates.detailActionBtnsTemplate(exercise.isFav);

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

export { initDetail };
