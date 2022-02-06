import "./SideBar.css";
import SidebarChatroomBtn from "../../Components/SideBarChatroomBtn/SideBarChatroomBtn";

import { useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";

import { useSelector } from "react-redux";

import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import db from "../../Services/Firebase/firebase";

function SideBar() {
  const username = useSelector((state) => state.user.username);
  const uid = useSelector((state) => state.user.uid);
  const [channel, setChannel] = useState([]);
  const q = query(
    collection(db, "chatrooms"),
    where("users", "array-contains", uid)
  );
  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      let channels = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id;
        channels.push(data);
      });
      setChannel(channels);
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__top-section">
        <input type="text" placeholder="Sohbet bul ya da başlat" />
      </div>
      <div className="sidebar__chatrooms-container">
        <div className="sidebar__chatrooms">
          <div className="sidebar__dm-tag">
            <span>DIREKT MESAJLAR</span>
            <AddIcon fontSize="small" sx={{ fontSize: 17 }} />
          </div>
          {channel.map((item) => {
            return (
              <SidebarChatroomBtn
                img=""
                name={item.name}
                crId={item.id}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
      <div className="sidebar__user-info">
        Logged in as :{username} uid: {uid}
      </div>
    </div>
  );
}

export default SideBar;
