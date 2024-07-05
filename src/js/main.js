import './exercises.js';

import ExerciseDetailInit from './exercise-datail';

import { fetchAndRenderExercisesList } from './exercise-list';

const axios = new axiosWrapper();
const params = { bodypart: 'cardio', page: 1, limit: 10 };

fetchAndRenderExercisesList(params);

axios
  .get('exercises', params)
  .then(res => console.log(res))
  .catch(error => {
    const errorDescription = axios.describeError(error);
    console.log(errorDescription);
  });
import ExerciseDetail from './exercise-datail';

// ExerciseDetail
const initExerciseDetail = async () => {
  const { modal: detailModal } = await ExerciseDetail();

  detailModal.onOpen = event => {
    console.log('modal opened', detailModal.itemID);
    // your logic here
  };

  detailModal.$el.addEventListener('click', event => {
    console.log('modal click event', detailModal.itemID);
    // your logic here

    if ('favDel' in event.target.dataset) {
      console.log('btn remove fav clicked');
      // update fav list
    } else if ('rating' in event.target.dataset) {
      console.log('btn rating clicked', detailModal.itemID);
      // create/open rating modal
      detailModal.close();
    }
  });
};
//
initExerciseDetail();
