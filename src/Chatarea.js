import React from "react";
import "./Chatarea.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Chatarea() {
  return (
    <div className="chat">
      <div className="chat_header">
        <AccountCircleIcon />
        <div className="chat_headerInfo">
          <h3>Room Name</h3>
        </div>
        <div className="chat_headerRight">
        <MoreHorizIcon />
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Sender</span>
          NAMASTE!
          <span className="chat_timestamp">
            9:40am
          </span>
        </p>
        <p className="chat_receiver">
          <span className="chat_name">Receiver</span>
          Hello!
          <span className="chat_timestamp">
            9:45am
          </span>
        </p>
      </div>
      <div className="chat_footer"></div>
    </div>
  );
}

export default Chatarea;
