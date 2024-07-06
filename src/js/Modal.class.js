export default class Modal {
  static count = 0;
  #header;
  #body;
  #actions;
  #className = 'modal';
  onHide = null;
  onOpen = null;

  constructor({ body = '', header = '', actions = '', className = null } = {}) {
    this.#header = header;
    this.#body = body;
    this.#actions = actions;
    this.#className += !!className ? ` ${className}` : '';

    Modal.count++;
    this.render();
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
          <div class="modal-actions">
            ${this.#actions}
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

  set actions(newContent) {
    this.#actions = newContent;
    if (this.$el) {
      const modalActions = this.$el.querySelector('.modal-actions');
      modalActions.innerHTML = this.#actions;
    }
  }

  initEvents() {
    this.closeHandler = this.close.bind(this);
    this.outsideClickHandler = event => {
      if (event.target === this.$el) {
        this.close();
      }
    };

    this.escapeKeyHandler = event => {
      if (event.key === 'Escape') {
        this.close();
      }
    };

    const closeBtn = this.$el.querySelector('.modal-close-btn');
    closeBtn.addEventListener('click', this.closeHandler);
    window.addEventListener('click', this.outsideClickHandler);
    window.addEventListener('keydown', this.escapeKeyHandler);
  }

  removeEvents() {
    const closeBtn = this.$el.querySelector('.modal-close-btn');
    closeBtn.removeEventListener('click', this.closeHandler);
    window.removeEventListener('click', this.outsideClickHandler);
    window.removeEventListener('keydown', this.escapeKeyHandler);
  }

  open() {
    this.$el.classList.remove('hide');
    this.$el.classList.add('show');
    const modalContainer = this.$el.querySelector('.modal-container');
    modalContainer.classList.remove('hide');
    this.initEvents();
    if (typeof this.onOpen === 'function') {
      this.onOpen();
    }
    document.body.style.overflow = 'hidden';
  }

  close() {
    const modalContainer = this.$el.querySelector('.modal-container');
    this.$el.classList.add('hide');
    this.$el.addEventListener(
      'animationend',
      () => {
        if (this.$el.classList.contains('hide')) {
          this.$el.classList.remove('show');
          modalContainer.classList.add('hide');
          if (typeof this.onHide === 'function') {
            this.onHide();
          }
          this.removeEvents();
          this.body = '';
          document.body.style.overflow = 'auto';
        }
      },
      { once: true }
    );
  }
}
