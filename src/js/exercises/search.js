export default class Search {
  #form;
  #submitBtn;
  #clearBtn;
  #input;
  #onFormSubmitHandler;
  constructor({ onFormSubmitHandler }) {
    this.#form = document.querySelector('.exercises-search-form');
    this.#submitBtn = this.#form.querySelector('.exercises-search-btn');
    this.#clearBtn = this.#form.querySelector('.exercises-search-clear-btn');
    this.#input = this.#form.querySelector('.exercises-search-input');
    this.#onFormSubmitHandler = onFormSubmitHandler;

    this.#submitBtn.addEventListener('click', event => {
      event.preventDefault();
      this.#onSearch();
    });

    this.#input.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.#onSearch();
      }
    });

    this.#clearBtn.addEventListener('click', event => {
      this.#onClear();
    });

    this.#input.addEventListener('input', event => {
      this.#checkClearBtn();
    });
  }

  hide() {
    this.#form.classList.add('hidden');
    this.#clear();
  }

  show() {
    this.#form.classList.remove('hidden');
  }

  #clear() {
    this.#input.value = '';
    this.#hideClearBtn();
  }

  #getQuery() {
    return this.#input.value.trim();
  }

  #onSearch() {
    const query = this.#getQuery();

    this.#onFormSubmitHandler({ query });
  }

  #onClear() {
    this.#clear();
    this.#hideClearBtn();
    this.#onSearch();
  }

  #hideClearBtn() {
    this.#clearBtn.classList.add('hidden');
  }

  #showClearBtn() {
    this.#clearBtn.classList.remove('hidden');
  }

  #checkClearBtn() {
    if (this.#getQuery() !== '') {
      this.#showClearBtn();
    } else {
      this.#hideClearBtn();
    }
  }
}
