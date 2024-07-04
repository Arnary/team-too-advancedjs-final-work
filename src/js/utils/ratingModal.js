import { ModalWindow } from './modalWindow';
import axios from 'axios';

const modalRootEl = document.getElementById('modalRoot');
const modal = new ModalWindow(modalRootEl);

const ratingModalRootEl = document.getElementById('ratingModalRoot');
const ratingModal = new ModalWindow(ratingModalRootEl);

const initializeModal = () => {
  const modalHtmlContents = '<div>Modal opened</div><button id="give_rating_btn" type="button">Give a rating</button>';
  modal.show(modalHtmlContents);
  document.getElementById('give_rating_btn').addEventListener('click', openRatingModal);
};

const openRatingModal = () => {
  modal.close();
  ratingModal.show(document.getElementById('ratingModalRoot').innerHTML);
  document.getElementById('ratingForm').addEventListener('submit', submitRating);
};

const submitRating = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const rating = formData.get('rating');
  const email = formData.get('email');

  try {
    const { data } = await axios.post('/your-backend-url', { rating, email });

    if (data.success) {
      ratingModal.close();
      initializeModal();
    } else {
      alert(`Error: ${data.message}`); // Replace with a better notification system
    }
  } catch (error) {
    alert(`Error: ${error.message}`); // Replace with a better notification system
  }
};

document.getElementById('modal_open_btn').addEventListener('click', initializeModal);
