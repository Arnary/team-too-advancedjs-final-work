import Pagination from './pagination.js';
import { getExercises } from '../api.js';

export default class Exercises {
  #block;
  #list;
  #pagination;
  #filter;
  #category;
  #query;

  constructor() {
    this.#block = document.getElementById('exercises-block');
    this.#list = document.getElementById('exercises-list');
    this.#pagination = new Pagination('#exercises-pagination', async (page) => {
      await this.#loadExercises(page);
    });
  }

  async load({ filter, category, query}) {
    this.#filter = filter;
    this.#category = category;
    this.#query = query;
    await this.#loadExercises(1);
  }

  hide() {
    this.#block.classList.add('hidden');
  }

  show() {
    this.#block.classList.remove('hidden');
  }

  async #loadExercises(page) {
    const { totalPages, results } = await getExercises(this.#filter, this.#category, this.#query, page);

    this.#list.innerHTML = results.map(this.#renderExercise).join('');

    this.#pagination.render(page, totalPages);
  }

  #renderExercise({ id, name }) {
    return `
        <li style="width: 100%; border: 1px solid red" class="exercises-item" data-id="${id}">${name}</li>
  `;
  }
}
