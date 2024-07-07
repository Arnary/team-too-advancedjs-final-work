import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';

const defaultOptions = {
  position: 'center',
  timeout: 5000,
  messageColor: 'black',
};

export const izi = {
  Success: (message, options = {}) => {
    iziToast.success({ message, ...defaultOptions, ...options });
  },
  Info: (message, options = {}) => {
    iziToast.info({ message, ...defaultOptions, ...options });
  },
  Error: (message, options = {}) => {
    iziToast.error({ message, ...defaultOptions, ...options });
  },
};
