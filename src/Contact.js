import React from "react";
// import SearchIcon from '@mui/icons-material/Search';
import "./Contact.css";
import AddIcon from "@mui/icons-material/Add";
import "./ContactChat.css";
import ContactChat from "./ContactChat";
import Chatarea from "./Chatarea";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Drawer from "./Drawer";

function Contact() {
  return (
    <div className="contact">
      <div className="contact_header">
        <div className="contact_searchcontainer">
          <Drawer />
          <input placeholder="Search here for new chat" type="text" />
        </div>
        <div className="contact_header_right">
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>
      </div>
      <div className="contact_group">
        <div className="chatLeft">
          <div className="contactHeader">
            <h2>My Chats</h2>
            <div className="contact_groupContainer">
              <AddIcon />
              <input placeholder="New Group Chat" type="text" />
            </div>
          </div>

          <div className="contact_Chats">
            <ContactChat />
            <ContactChat />
            <ContactChat />
            <ContactChat />
            <ContactChat />
            <ContactChat />
          </div>
        </div>
        <div className="chatRight">
          <Chatarea />
        </div>
      </div>
    </div>
  );
}

export default Contact;
