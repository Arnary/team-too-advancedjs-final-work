export default class Title {
  #element;
  constructor() {
    this.#element = document.querySelector('.exercises-title-sub');
  }

  show(text) {
    this.#element.querySelector('.exercises-title-sub-text').innerHTML = text;
    this.#element.classList.remove('hidden');
  }

  hide() {
    this.#element.classList.add('hidden');
  }
}