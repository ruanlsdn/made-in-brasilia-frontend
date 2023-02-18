import React from "react";
import { FiUser } from "react-icons/fi";

const ChatSidebarLinks = ({ displayName, lastMessage }) => {
  return (
    <div
      className="single-chat single-chat-hover"
      onClick={() => console.log(1)}
    >
      <FiUser className="single-chat-icon" size={10} />
      <div className="single-chat-user-info">
        <h1>{displayName}</h1>
        <p>{lastMessage}</p>
      </div>
    </div>
  );
};

export default ChatSidebarLinks;
