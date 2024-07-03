import { axiosWrapper } from './utils/axiosWrapper';

const axios = new axiosWrapper();
const params = { bodypart: 'cardio', page: 1, limit: 10 };

axios
  .get('exercises', params)
  .then(res => console.log(res))
  .catch(error => {
    const errorDescription = axios.describeError(error);
    console.log(errorDescription);
  });
