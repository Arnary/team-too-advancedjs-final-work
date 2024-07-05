export default class Filters {
  #buttons;
  #onClickHandler;
  constructor({ onChangeHandler }) {
    this.#buttons = document.querySelectorAll('.exercises-filter-btn');
    this.#onClickHandler = onChangeHandler;

    this.#buttons.forEach(button => {
      button.addEventListener('click', (event) => this.#onClick(event.target));
    });
  }

  getCurrent() {
    return this.#buttons.values().find((btn) => btn.classList.contains('active')).innerText;
  }

  init() {
    this.#onClick(this.#buttons[0]);
  }

  #onClick(target) {
    this.#buttons.forEach(btn => btn.classList.remove('active'));
    target.classList.add('active');
    this.#onClickHandler({
      category: target.innerText,
      filterKey: target.dataset.filterKey,
    });
  }
}
