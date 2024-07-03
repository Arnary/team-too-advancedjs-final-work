import Modal from './Modal.class.js';

export default () => {
  const modal = new Modal({ className: 'exercise-detail' });
  modal.open();
};
