import axiosOriginal from 'axios';

const axios = axiosOriginal.create({
  withCredentials: true,
});

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
      return error;
    } catch (error) {
      return { error: 'Error desconocido' };
    }
  },
);

export default axios;
