import { createSlice } from "@reduxjs/toolkit";
import { reducerData } from "./reducerData";

const usersSlice = createSlice({
    name: 'profile',
  initialState: {
    data: reducerData
  },
  reducers: {
   
  },
});

export default usersSlice.reducer;