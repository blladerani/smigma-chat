import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    username: null,
    uid: null,
  },
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.uid = action.payload.uid;
    },
    logout: (state) => {
      state.username = null;
      state.uid = null;
    },
  },
});

export const { login, logout } = slice.actions;
export default slice.reducer;
