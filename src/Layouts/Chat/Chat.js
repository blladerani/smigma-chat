import "./Chat.css";
import Message from "../../Components/Message/Message";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { TextField } from "@mui/material";

import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
  serverTimestamp,
} from "firebase/firestore";
import db from "../../Services/Firebase/firebase";

function ChatSection() {
  const chatroomName = useSelector((state) => state.chatroom.name);
  const chatroomId = useSelector((state) => state.chatroom.id);
  const username = useSelector((state) => state.user.username);

  const [messages, setMessages] = useState([]);

  const inputKeypress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (e.target.value != "") {
        const c = collection(db, "chatrooms", chatroomId, "messages");
        addDoc(c, {
          body: e.target.value,
          username: username,
          timestamp: serverTimestamp(),
        });

        e.target.value = "";
      }
    }
  };

  useEffect(() => {
    if (chatroomId != null) {
      const q = query(
        collection(db, "chatrooms", chatroomId, "messages"),
        orderBy("timestamp", "desc"),
        limit(50)
      );
      onSnapshot(q, (querySnapshot) => {
        let msg = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          msg.push(data);
        });

        setMessages(msg);
      });
    }
  }, [chatroomId]);
  const inputHandler = (e) => {};

  return (
    <div className="chat">
      <div className="chat__top-section">
        <div className="username-section">
          <AlternateEmailIcon style={{ fill: "#747976" }} />
          <span className="username">{chatroomName}</span>
        </div>
      </div>
      <div className="chat__utilities-section">{/* Will be added soon */}</div>

      {chatroomName ? (
        <>
          <div className="chat__messages-section">
            {messages.map((item) => (
              <Message
                message={item.body}
                username={item.username}
                key={item.id}
              />
            ))}
          </div>
          <div className="chat__message-input-section">
            <form action="">
              <TextField
                onChange={(e) => {
                  inputHandler(e);
                }}
                fullWidth
                multiline
                maxRows={7}
                className="input"
                size="medium"
                onKeyPress={(e) => {
                  inputKeypress(e);
                }}
              />
            </form>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default ChatSection;
