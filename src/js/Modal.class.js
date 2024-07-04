export default class Modal {
  static count = 0;
  #header;
  #body;
  #className = 'modal';

  constructor({ body = '', header = '', className = null } = {}) {
    this.#header = header;
    this.#body = body;
    this.#className += !!className ? ` ${className}` : '';

    Modal.count++;
    this.render();
    this.initEvents();
  }

  get id() {
    return `modal_${Modal.count}`;
  }

  render() {
    const template = `
      <div id="${this.id}" class="${this.#className}">
        <div class="modal-container">
          <div class="modal-header">
            <div class="modal-header__title">${this.#header}</div>
            <a role="button" id="closeModal" class="modal-close-btn">
              <svg class="icon">
                <use href="./img/icons.svg#icon-close"></use>
              </svg>
            </a>
          </div>
          <div class="modal-body">
            ${this.#body}
          </div>
        </div>
      </div>`;

    document.body.insertAdjacentHTML('beforeend', template);
    this.$el = document.querySelector(`#${this.id}`);
  }

  set body(newContent) {
    this.#body = newContent;
    if (this.$el) {
      const modalBody = this.$el.querySelector('.modal-body');
      modalBody.innerHTML = this.#body;
    }
  }

  initEvents() {
    const closeBtn = this.$el.querySelector('.modal-close-btn');

    closeBtn.addEventListener('click', this.close.bind(this));
    window.addEventListener('click', this.outsideClick.bind(this));
    window.addEventListener('keydown', this.escapeKey.bind(this));
    // closeBtn.addEventListener('click', this.close);
    // window.addEventListener('click', this.outsideClick);
    // window.addEventListener('keydown', this.escapeKey);
  }

  open() {
    this.$el.classList.remove('hide');
    this.$el.classList.add('show');
    console.log('open', this.$el.classList);
  }

  close() {
    const modalContainer = this.$el.querySelector('.modal-container');
    modalContainer.classList.add('hide');
    this.$el.classList.add('hide');

    this.$el.addEventListener(
      'animationend',
      () => {
        if (this.$el.classList.contains('hide')) {
          this.$el.classList.remove('show');
          if (typeof this.onhide === 'function') {
            this.onhide();
            this.body = '';
          }
        }
      },
      { once: true }
    );
  }

  destroy() {
    this.$el.remove();
  }

  outsideClick(event) {
    if (event.target === this.$el) {
      this.close();
    }
  }

  escapeKey(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }
}
