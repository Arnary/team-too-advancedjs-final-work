import Categories from './exercises/categories.js';
import Filters from './exercises/filters.js';
import Title from './exercises/title.js';
import Exercises from './exercises/exercises.js';
import Search from './exercises/search.js';

let exerciseFilter = null;
let exerciseCategory = null;

const title = new Title();
const exercises = new Exercises();

const search = new Search({
  onFormSubmitHandler: async ({ query }) => {
    await exercises.load({ filter: exerciseFilter, category: exerciseCategory, query });
  },
});

const categories = new Categories({
  onClickHandler: async ({ name }) => {
    exerciseCategory = name;

    await exercises.load({ filter: exerciseFilter, category: exerciseCategory });

    categories.hide();
    exercises.show();
    title.show(name);
    search.show();
  },
});

const filters = new Filters({
  onChangeHandler: async ({ category, filterKey }) => {
    exerciseFilter = filterKey;
    await categories.load(category);

    title.hide();
    exercises.hide();
    search.hide();

    categories.show();
  },
});

filters.init();
