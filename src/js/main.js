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

// ExerciseDetail
const { modal } = await ExerciseDetailInit();
/**
 * exsamples
 *
 * */
modal.onOpen = event => {
  console.log('modal opened', modal.itemID);
};

modal.$el.addEventListener('click', event => {
  console.log('modal click event', modal.itemID);
});
