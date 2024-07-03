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

  show(modalContents) {
    if ('' === modalContents) return this.close();
    if (!'' === this.modalContents) return this.update(modalContents);

    if (this.onOpenCallback) this.onOpenCallback();

    this.updateModalHtml(modalContents);
    this.backdropElement.classList.add('visible');
    this.addEventListeners();
  }

  update(modalContents) {
    if (modalContents === this.modalContents) return;
    if ('' === modalContents) return this.close();

    this.updateModalHtml(modalContents);
  }

  close() {
    if (this.onCloseCallback) this.onCloseCallback();

    this.updateModalHtml();
    this.removeEventListeners();
    this.backdropElement.classList.remove('visible');
  }

  updateModalHtml(html = '') {
    this.modalContents = html;
    this.modalContentElement.innerHTML = html;
  }

  addEventListeners() {
    this.backdropElement.addEventListener('click', this.onCloseBound);
    this.closeButtonElement.addEventListener('click', this.onCloseBound);
    document.addEventListener('keydown', this.onKeyPressBound);
  }

  removeEventListeners() {
    this.backdropElement.removeEventListener('click', this.onCloseBound);
    this.closeButtonElement.removeEventListener('click', this.onCloseBound);
    document.removeEventListener('keydown', this.onKeyPressBound);
  }

  onMouseClick(event) {
    if (event.target === this.backdropElement || event.target === this.closeButtonElement) this.close();
  }

  onKeyPress(event) {
    if (event.key === 'ArrowLeft') this.update('<div style="margin-right: auto">Left Arrow pressed</div>');
    if (event.key === 'ArrowRight') this.update('<div style="margin-left: auto">Right Arrow pressed</div>');
    if (event.key === 'ArrowUp') this.update('<div style="align-self: start">Up Arrow pressed</div>');
    if (event.key === 'ArrowDown') this.update('<div style="align-self: end">Down Arrow pressed</div>');
    if (event.key === 'Escape') this.close();
    return;
  }

  // TODO: add touchscreen swipe events
}
