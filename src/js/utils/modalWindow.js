export class ModalWindow {
  onOpenCallback = null;
  onCloseCallback = null;
  modalContents = '';

  modalContentElement = document.querySelector('.modal__content');
  closeButtonElement = document.querySelector('.modal__close-btn');
  backdropElement = document.querySelector('.modal__backdrop');

  onKeyPressBound = this.onKeyPress.bind(this);
  onCloseBound = this.onMouseClick.bind(this);

  constructor(modalRootElement, options = {}) {
    this.backdropElement = modalRootElement;

    for (const [key, value] of Object.entries(options)) this[key] = value;
  }

  show(modalContents = '') {
    if (modalContents !== '') this.modalContents = modalContents;
    this.modalContentElement.innerHTML = this.modalContents;

    if (this.onOpenCallback) this.onOpenCallback();

    this.backdropElement.classList.add('visible');
    this.backdropElement.addEventListener('click', this.onCloseBound);
    this.closeButtonElement.addEventListener('click', this.onCloseBound);
    document.addEventListener('keydown', this.onKeyPressBound);
  }

  update(modalContents = '') {
    if (!this?.modalContents) return;
    if (modalContents === this.modalContents) return;

    this.modalContents = modalContents;
    this.modalContentElement.innerHTML = this.modalContents;
  }

  close() {
    if (this.onCloseCallback) this.onCloseCallback();

    this.modalContentElement.innerHTML = '';
    this.backdropElement.removeEventListener('click', this.onCloseBound);
    this.closeButtonElement.removeEventListener('click', this.onCloseBound);
    document.removeEventListener('keydown', this.onKeyPressBound);
    this.backdropElement.classList.remove('visible');
  }

  onMouseClick(event) {
    if (event.target === this.backdropElement || event.target === this.closeButtonElement) this.close();
  }

  onKeyPress(event) {
    if (event.key === 'ArrowLeft') this.update('<div style="margin-right: auto">Left Arrow pressed</div>');
    if (event.key === 'ArrowRight')  this.update('<div style="margin-left: auto">Right Arrow pressed</div>')
    if (event.key === 'ArrowUp')  this.update('<div style="align-self: start">Up Arrow pressed</div>')
    if (event.key === 'ArrowDown')  this.update('<div style="align-self: end">Down Arrow pressed</div>')
    if (event.key === 'Escape') this.close();
  }

  // TODO: add touchscreen swipe events
}
