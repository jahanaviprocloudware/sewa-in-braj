import { createSlice } from "@reduxjs/toolkit";
import { reducerData } from "./reducerData";

const usersSlice = createSlice({
    name: 'profile',
  initialState: {
    data: reducerData,
    selectedData: null,
  },
  reducers: {
    setSelectedData: (state, action) => {
      state.selectedData = action.payload;
    },
  },
});

export const { setSelectedData } = usersSlice.actions;
export default usersSlice.reducer;