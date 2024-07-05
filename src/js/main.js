import './exercises.js';

import ExerciseDetailInit from './exercise-datail';

// ExerciseDetail
const { modal: detailModal } = await ExerciseDetailInit();

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
//
