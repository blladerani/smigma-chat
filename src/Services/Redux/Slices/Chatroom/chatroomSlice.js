import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "chatroom",
  initialState: {
    id: null,
    name: null,
  },
  reducers: {
    chatroomChange: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
  },
});

export const { chatroomChange } = slice.actions;
export default slice.reducer;
