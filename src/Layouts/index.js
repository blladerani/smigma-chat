import "./index.css";
import SideBar from "./SideBar/SideBar";
import Chat from "./Chat/Chat";
import Login from "./Login/Login";

import { useEffect } from "react";

import { auth } from "../Services/Firebase/firebase";

import { useSelector, useDispatch } from "react-redux";
import { login } from "../Services/Redux/Slices/User/userSlice";

function App() {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({ username: authUser.displayName, uid: authUser.uid }));
      }
    });
  }, [dispatch]);

  if (username) {
    return (
      <div className="app">
        <SideBar />
        <Chat />
      </div>
    );
  } else {
    return <Login />;
  }
}

export default App;
