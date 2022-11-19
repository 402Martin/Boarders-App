import { createSlice } from '@reduxjs/toolkit';
import { User } from 'src/types/user.types';
import { AsyncStorage } from 'react-native';

const initialState = {} as User;
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const newState = { ...state, ...action.payload };
      try {
        AsyncStorage.setItem('user', JSON.stringify(newState));
      } catch (error) {
        console.error(error);
      }
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
