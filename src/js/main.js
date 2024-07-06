import('./favorites.js');
const bodyClasses = document.querySelector('body')?.classList;

if (bodyClasses.contains('index')) {
  import('./exercises.js');
}

import { initDetail } from './exercise-detail';
import { removeExercise } from './favorites.js';

const initModalDetail = async () => {
  const { modal: detailModal } = await initDetail();

  detailModal.$el.addEventListener('click', event => {
    if ('favDel' in event.target.dataset && bodyClasses.contains('favorites')) {
      removeExercise(detailModal.itemID);
      detailModal.close();
    } else if ('rating' in event.target.dataset) {
      // console.log('btn rating clicked', detailModal.itemID);
      // create/open rating modal
      detailModal.close();
    }
  });
};

initModalDetail();
