import { configureStore } from '@reduxjs/toolkit';
import alarmSlice from './alarm.slice';
import userSlice from './user.slice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    alarm: alarmSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
