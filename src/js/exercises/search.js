export default class Search {
  #form;
  #btn;
  #input;
  #onFormSubmitHandler;
  constructor({ onFormSubmitHandler }) {
    this.#form = document.querySelector('.exercises-search-form');
    this.#btn = this.#form.querySelector('.exercises-search-btn');
    this.#input = this.#form.querySelector('.exercises-search-input');
    this.#onFormSubmitHandler = onFormSubmitHandler;

    this.#btn.addEventListener('click', event => {
      event.preventDefault();
      this.onSearch();
    });

    this.#input.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.onSearch();
      }
    });
  }

  hide() {
    this.#form.classList.add('hidden');
    this.#input.value = '';
  }

  show() {
    this.#form.classList.remove('hidden');
  }

  onSearch() {
    const query = this.#input.value.trim();

    if (query === '') {
      return;
    }

    this.#onFormSubmitHandler({ query });
  }
}
