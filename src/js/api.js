import { axiosWrapper } from './utils/axiosWrapper.js';
const api = new axiosWrapper();

export async function getFilters(filter, page, limit = 12) {
  try {
    return await api.get('filters', { filter, page, limit });
  } catch (error) {
    console.log(error);
  }
}

export async function getExercises(filter, category, keyword, page, limit = 10) {
  try {
    return await api.get('exercises', { [filter]: category, ...(keyword && { keyword }), page, limit });
  } catch (error) {
    console.log(error);
  }
}
