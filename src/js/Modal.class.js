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
  }

  get id() {
    return `modal_${Modal.count}`;
  }

  render() {
    const template = `
      <div id="${this.id}" class="${this.#className}">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-header__title">${this.#header}</div>
            <a role="button" id="closeModal" role="button" class="modal-close-btn">
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
    this.modal = document.querySelector(`#${this.id}`);
  }

  set body(newContent) {
    this.#body = newContent;
    if (this.modal) {
      const modalBody = this.modal.querySelector('.modal-body');
      modalBody.innerHTML = this.#body;
    }
  }

  initEvents() {
    const closeBtn = this.modal.querySelector('.modal-close-btn');
    closeBtn.onclick = this.close.bind(this);

    window.onclick = this.outsideClick.bind(this);
    window.addEventListener('keydown', this.escapeKey.bind(this));
  }

  open() {
    if (!this.modal) {
      this.render();
      this.initEvents();
    }

    this.modal.classList.remove('hide');
    this.modal.classList.add('show');
  }

  close() {
    const modalContent = this.modal.querySelector('.modal-content');
    modalContent.classList.add('hide');
    this.modal.classList.add('hide');

    this.modal.addEventListener(
      'animationend',
      () => {
        if (this.modal.classList.contains('hide')) {
          this.modal.style.display = 'none';
        }
      },
      { once: true }
    );

    modalContent.addEventListener(
      'animationend',
      () => {
        if (modalContent.classList.contains('hide')) {
          this.modal.remove();
        }
      },
      { once: true }
    );
  }

  outsideClick(event) {
    if (event.target == this.modal) {
      this.close();
    }
  }

  escapeKey(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }
}
