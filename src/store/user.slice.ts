import { createSlice } from '@reduxjs/toolkit';
import { User } from 'src/types/user.types';

const initialState = {} as User;
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const newState = { ...state, ...action.payload };
      return newState;
    },
    clearUser: (state) => {
      state = {} as User;
      return state;
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice;
