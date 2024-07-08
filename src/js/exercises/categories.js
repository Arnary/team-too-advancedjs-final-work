import Pagination from './pagination.js';
import { getFilters } from '../api.js';
import { capitalizeFirstLetter } from '../utils/helpers';

export default class Categories {
  #block;
  #list;
  #pagination;
  #onClickHandler;
  #filter;
  #limit = 9;

  constructor({ onClickHandler }) {
    this.#block = document.getElementById('exercises-categories-block');
    this.#list = document.getElementById('exercises-categories-list');
    this.#pagination = new Pagination('#exercises-categories-pagination', async (page) => {
      await this.#loadFilters(page);
    });
    this.#onClickHandler = onClickHandler;
    this.#list.addEventListener('click', (event) => {
      const block = event.target.closest('.exercises-categories-item');
      if (!block) {
        return;
      }
      const { name } = block.dataset;
      this.#onClickHandler({ name });
    });

    if (window.innerWidth > 767) {
      this.#limit = 12
    }
  }

  async load(filter) {
    this.#filter = filter;
    await this.#loadFilters(1);
  }

  hide() {
    this.#block.classList.add('hidden');
  }

  show() {
    this.#block.classList.remove('hidden');
  }

  async #loadFilters(page) {
    const { totalPages, results } = await getFilters(this.#filter, page, this.#limit);

    this.#list.innerHTML = results.map(this.#renderFilter).join('');

    this.#pagination.render(page, totalPages);
  }

  #renderFilter({ filter, name, imgURL }) {
    return `
        <li class="exercises-categories-item" data-name="${name}" data-filter="${filter}">
          <img class="exercises-categories-item-img" src="${imgURL}" alt="${name}">
          <div class="exercises-categories-item-wrapper">
            <h2 class="exercises-categories-item-title">${capitalizeFirstLetter(name)}</h2>
            <p class="exercises-categories-item-text">${filter}</p>
          </div>
        </li>
  `;
  }
}
