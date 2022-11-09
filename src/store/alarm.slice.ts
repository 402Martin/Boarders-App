import { createSlice } from '@reduxjs/toolkit';
import { IAlarm } from 'src/types/main.types';

const initialState = {} as IAlarm;
const alarmSlice = createSlice({
  name: 'Alarm',
  initialState,
  reducers: {
    setAlarm: (state, action: { payload: IAlarm }) => {
      const newState = { ...state, ...action.payload };
      return newState;
    },
    clearAlarm: (state) => {
      state = {} as IAlarm;
      return state;
    },
  },
});
export const alarmActions = alarmSlice.actions;
export default alarmSlice;
