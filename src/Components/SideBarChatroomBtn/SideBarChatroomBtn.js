import "./SideBarChatroomBtn.css";

import { Avatar } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import { useDispatch } from "react-redux";
import { chatroomChange } from "../../Services/Redux/Slices/Chatroom/chatroomSlice";

function Chatroom({ name, img, crId }) {
  const dispatch = useDispatch();

  const handleClick = (id, name) => {
    //Switching to the channel using the id prop.
    dispatch(chatroomChange({ id: id, name: name }));
  };

  return (
    <div className="chatroom" onClick={() => handleClick(crId, name)}>
      <Avatar src={img} sx={{ height: 32, width: 32 }} />
      <span>{name}</span>
      <ClearIcon className="chatroom__clear-icon" fontSize="x-small" />
    </div>
  );
}

export default Chatroom;
