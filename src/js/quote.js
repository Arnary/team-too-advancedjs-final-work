import { axiosWrapper } from './utils/axiosWrapper.js';
const QUOTE_LS_KEY = 'quote';

const getQuote = () => {
  const localStorageQuote = getQuoteFromLocalStorage();
  if (localStorageQuote) {
    populateQuote(localStorageQuote);
  }

  new axiosWrapper().get('/quote').then(populateQuote);
};

const getQuoteFromLocalStorage = () => {
  const localStorageQuote = localStorage.getItem(QUOTE_LS_KEY);
  if (localStorageQuote?.hasOwnProperty('quote')) {
    return JSON.parse(localStorageQuote);
  }
  return null;
};

const setQuoteToLocalStorage = quote => {
  if (!quote) return;
  localStorage.setItem(QUOTE_LS_KEY, JSON.stringify(quote));
};

const populateQuote = ({ quote, author }) => {
  if (!quote) return;

  document.querySelector('.quote-main-quote').innerHTML = quote;
  document.querySelector('.quote-main-author').innerHTML = author;
  setQuoteToLocalStorage({ author, quote });
};

getQuote();
