import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'profile',
  initialState: {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
  },
  reducers: {
   
  },
});

export default usersSlice.reducer;