// import React, { useEffect } from "react";
import "./ContactChat.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function ContactChat() {
  return (
    <div className="contactChat">
      <AccountCircleIcon  /> 
      <div className="contactChat_info">
        <h2>Room Name</h2>
        {/* <p>Last message...</p> */}
      </div>
    </div>
  );
}

export default ContactChat;
