import { axiosWrapper } from './utils/axiosWrapper.js';
const QUOTE_LS_KEY = 'quote';

const getQuote = () => {
  const localStorageQuote = getQuoteFromLocalStorage();

  if (localStorageQuote) {
    populateQuote(localStorageQuote);
  } else {
    new axiosWrapper().get('/quote').then(populateQuote);
  }
};

const getQuoteFromLocalStorage = () => {
  const localStorageQuote = localStorage.getItem(QUOTE_LS_KEY);

  if (!localStorageQuote) return;

  const { expireDate, quote, author } = JSON.parse(localStorageQuote);

  return Date.now() > expireDate ? localStorage.removeItem(QUOTE_LS_KEY) : { quote, author };
};

const setQuoteToLocalStorage = quote => {
  if (!quote) return;

  localStorage.setItem(
    QUOTE_LS_KEY,
    JSON.stringify({
      ...quote,
      expireDate: new Date(new Date().setHours(23, 59, 59, 0)).getTime(),
    })
  );
};

const populateQuote = ({ quote, author }) => {
  if (!quote) return;

  document.querySelector('.quote-main-quote').innerHTML = quote;
  document.querySelector('.quote-main-author').innerHTML = author;
  setQuoteToLocalStorage({ author, quote });
};

getQuote();
