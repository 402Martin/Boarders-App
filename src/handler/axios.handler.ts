import axiosOriginal from 'axios';

const axios = axiosOriginal;
axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    try {
      let message = error.message;
      if (error.response.data?.errors) {
        message = error.response.data.errors;
      }
      console.log('response', error.response);
      throw error;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

export default axios;
