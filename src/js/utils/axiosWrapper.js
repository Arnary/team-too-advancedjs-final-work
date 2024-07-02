import axios from 'axios';
// import iziToast from 'izitoast';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import 'izitoast/dist/css/iziToast.min.css';
const BASE_URL = 'https://your-energy.b.goit.study/api';

export class axiosWrapper {
  constructor() {
    this.axios = axios;
  }

  get(url = '', urlParams = {}) {
    return this.request('GET', url, { params: urlParams });
  }

  post(url = '', body = {}, urlParams = {}) {
    return this.request('POST', url, { data: body, params: urlParams });
  }

  patch(url = '', body = {}, urlParams = {}) {
    return this.request('POST', url, { data: body, params: urlParams });
  }

  async request(method, url, data) {
    if ('' === url || !url) throw new Error('url is empty');
    if (!typeof url === 'string') url = String(url);
    if (url.substring(0, 1) !== '/') url = `/${url}`;

    const { params = {} } = data;
    const urlParams = new URLSearchParams(params).toString();

    return this.axios
      .request(`${BASE_URL}${url}${urlParams ? `?${urlParams}` : ''}`, { method, data })
      .then(response => {
        const { status, data } = response;
        if (status >= 200 && status < 300) return data;
        throw new Error();
      })
      .catch(error => {
        throw error;
      });
  }

  describeError(error) {
    if (error.response) {
      const { status } = error.response;
      if (status === 400) return 'Invalid request';
      if (status === 404) return 'Not found';
      if (status === 409) return 'Already exists';
      if (status === 500) return 'Server error';
      return 'Unknown error occurred';
    } else if (error.request) {
      return 'No response from server';
    }
    return 'Something went wrong';
  }
}
