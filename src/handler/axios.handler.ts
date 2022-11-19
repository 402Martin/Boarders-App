import { PaletteScale } from 'src/styles/types';
import axiosOriginal from 'axios';
import { alarmActions } from 'src/store/alarm.slice';
import store from 'src/store/store';

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
      console.log(error.response);
      const message = error.response.data?.error;
      if (!message) throw new error();
      store.dispatch(
        alarmActions.setAlarm({
          message,
          type: PaletteScale.SECONDARY_ACCENT_ERROR_RED50,
        }),
      );
    } catch (error) {
      console.log(error);
      store.dispatch(
        alarmActions.setAlarm({
          message: 'error desconocido',
          type: PaletteScale.SECONDARY_ACCENT_ERROR_RED50,
        }),
      );
    }
  },
);

export default axios;
