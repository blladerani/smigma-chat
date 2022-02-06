import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/User/userSlice";
import chatroomReducer from "./Slices/Chatroom/chatroomSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    chatroom: chatroomReducer,
  },
});
