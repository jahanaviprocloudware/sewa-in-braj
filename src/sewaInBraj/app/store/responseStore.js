import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './../reducer/reducer';
import tabSlice from './../reducer/tabSlice';

export const store = configureStore({
  reducer: {
    users: usersSlice,
    activeTabs: tabSlice,
  },
});