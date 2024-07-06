import { axiosWrapper } from './utils/axiosWrapper.js';
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';

const api = new axiosWrapper();
const BASE_URL = 'https://your-energy.b.goit.study/api/subscription';

const form = document.querySelector('.subscribe-form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = emailInput.value;

    try {
        const response = await sendSubscription(email);
        showSuccessToast(response.message);
        emailInput.value = '';
    } catch (error) {
        handleError(error);
    }
});

async function sendSubscription(email) {
    const url = `${BASE_URL}`;
    const data = { email: email };

    try {
        const response = await api.post(url, data);
        return response;
    } catch (error) {
        throw error;
    }
}

function showSuccessToast(message) {
    iziToast.success({
        message: message,
        position: 'center',
        timeout: 5000
    });
}

function showInfoToast(message) {
    iziToast.info({
        message: message,
        position: 'center',
        timeout: 5000
    });
}

function showErrorToast(message) {
    iziToast.error({
        message: message,
        position: 'center',
        timeout: 5000
    });
}


function handleError(error) {
    if (error.response) {
        const { status, data } = error.response;
        switch (status) {
            case 400:
                showErrorToast(data.message);
                break;
            case 404:
                showNotFoundToast('Requested resource not found.');
                break;
            case 409:
                showInfoToast('Subscription already exists.');
                break;
            case 500:
                showErrorToast('Server error. Please try again later.');
                break;
            default:
                showInfoToast(data.message);
                break;
        }
    }
}
