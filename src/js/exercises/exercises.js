import Pagination from './pagination.js';
import { getExercises } from '../api.js';

export default class Exercises {
  #block;
  #list;
  #pagination;
  #filter;
  #category;
  #query;
  #limit = 8

  constructor() {
    this.#block = document.getElementById('exercises-block');
    this.#list = document.getElementById('exercises-list');
    this.#pagination = new Pagination('#exercises-pagination', async page => {
      await this.#loadExercises(page);
    });

    if (window.innerWidth > 767) {
      this.#limit = 10
    }
  }

  async load({ filter, category, query }) {
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
    const { totalPages, results } = await getExercises(this.#filter, this.#category, this.#query, page, this.#limit);

    this.#list.innerHTML = results.map(this.#renderExercise).join('');

    this.#pagination.render(page, totalPages);
  }

  #renderExercise(item) {
    return `
      <div class="exercise-card">
        <header class="exercise-card-header">
          <span class="exercise-card-title">Workout</span>
          <span class="exercise-card-rating">${item.rating}</span>
          <svg class="exercise-rating-icon">
              <use href="./img/icons.svg#icon-star"></use>
          </svg>
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
      </div>
  `;
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
