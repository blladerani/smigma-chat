import "./Message.css";

import { useEffect } from "react";

import { Avatar } from "@mui/material";

function Message({ username, message }) {
  // Everytime a new message renders messages will scroll down.
  useEffect(() => {
    const div = document.querySelector(".chat__messages-section");
    div.scrollTop = div.scrollHeight;
  }, []);

  return (
    <div className="message">
      <Avatar className="message-avatar" />
      <div>
        <div>
          <h4 className="message-username">{username}</h4>
          <span></span>
        </div>
        <p className="message-text">{message}</p>
      </div>
    </div>
  );
}

export default Message;
