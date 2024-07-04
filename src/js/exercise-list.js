import { axiosWrapper } from './utils/axiosWrapper';

const api = new axiosWrapper();
const defaultParams = { page: 1, limit: 10, bodyparts: 'back' };

const exercisesContainer = document.querySelector('.exercises-list-container');

export function fetchAndRenderExercisesList(params = defaultParams) {
  api.get('exercises', params).then(res => {
    const data = res.results;
    onSuccess(data);
  });
}

function onSuccess(data) {
  const container = new DocumentFragment();

  data.forEach(item => {
    const card = composeCard(item);
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('exercise-card');
    cardWrapper.innerHTML = card;
    container.append(cardWrapper);
  });

  exercisesContainer.append(container);
}

function composeCard(item) {
  return `
    <header class="exercise-card-header">
      <span class="exercise-card-title">Workout</span>
      <span class="exercise-card-rating">${item.rating}</span>
      <svg class="exercise-rating-icon">
          <use href="./img/icons.svg#icon-star"></use>
      </svg>
      <button class="exercise-card-start">
        Start
        <svg class="exercise-start-icon">
          <use href="./img/icons.svg#icon-arrow"></use>
        </svg>
      </button>
    </header>

    <div class="exercise-card-content">
      <img src="./img/figure.svg" alt="figure" class="exercise-name-icon" />
      <div class="exercise-card-name">
        ${capitalizeFirstLetter(item.name)}
      </div>
    </div>

    <footer class="exercise-card-footer">
      <div class="exercise-card-detail">
        Burned calories: <span class="value">${item.burnedCalories}</span>
      </div>
      <div class="exercise-card-detail">
        Body part: <span class="value">${item.bodyPart}</span>
      </div>
      <div class="exercise-card-detail">
        Target: <span class="value">${item.target}</span>
      </div>
    </footer>
  `;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
