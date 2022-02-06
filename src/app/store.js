import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/User/userSlice";
import chatroomReducer from "../features/Chatroom/chatroomSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    chatroom: chatroomReducer,
  },
});
