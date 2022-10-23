import axiosOriginal from 'axios';

const axios = axiosOriginal.create({
  withCredentials: true,
});

axios.interceptors.request.use(
  function (config) {
    console.log(config);
    console.log('salida');
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
      console.log('response');
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
