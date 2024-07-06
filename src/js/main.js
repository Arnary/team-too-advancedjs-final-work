const bodyClasses = document.querySelector('body')?.classList;

if (bodyClasses.contains('index')) {
  import('./exercises.js');
} else if (bodyClasses.contains('favorites')) {
  import('./favorites.js');
}

import { initDetail } from './exercise-detail';
// ExerciseDetail

//
initDetail();
