import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './../reducer/reducer';

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});