import { axiosWrapper } from './utils/axiosWrapper';

import ExerciseDetailInit from './exercise-datail';

const axios = new axiosWrapper();
const params = { bodypart: 'cardio', page: 1, limit: 10 };

axios
  .get('exercises', params)
  .then(res => console.log(res))
  .catch(error => {
    const errorDescription = axios.describeError(error);
    console.log(errorDescription);
  });

const { modal } = await ExerciseDetailInit();

/**
 * exsamples
 *
 * */
modal.$el.addEventListener('click', event => {
  console.log('inside modal click event');
});

modal.onhide = () => {
  console.log('hide event');
  // get current item id
  const id = modal.itemId();
};
