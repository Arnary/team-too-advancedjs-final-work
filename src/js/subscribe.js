// import { axiosWrapper } from './utils/axiosWrapper.js';

// const api = new axiosWrapper();
// const BASE_URL = 'https://your-energy.b.goit.study/api/subscription';

// const form = document.querySelector('.subscribe-form');
// const emailInput = document.getElementById('email');

// form.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     const email = emailInput.value;

//     if (isValidEmail(email)) {
//         try {
            
//             await sendSubscription(email);
            
//             alert('Thank you for subscribing!');
//             emailInput.value = '';
//         } catch (error) {
//             console.error('Error:', error);
//             alert('An error occurred. Please try again.');
//             emailInput.value = '';
//         }
//     } else {
//         alert('Please enter a valid email address.');
//     }
// });

// function isValidEmail(email) {
//     const regex = /^([\w.%+-]+@([\w.-]+\.[a-zA-Z]{2,}))$/i;
//     return regex.test(email);
// }

// async function sendSubscription(email) {
//     const url = `${BASE_URL}`;
//     const data = { email: email };

//     try {
//         const response = await api.post(url, data);
//         return response;
//     } catch (error) {
//         throw error;
//     }
// }
