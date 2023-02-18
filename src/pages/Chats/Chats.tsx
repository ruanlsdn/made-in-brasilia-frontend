import { useState } from "react";
import { ChatBody, ChatSidebar, Navbar } from "../../components";
import "./chats.css";

const Chats = () => {
  const [teste, setTeste] = useState(false);
  return (
    <>
      <div className="gradient-bg">
        <Navbar />
      </div>
      <div className="chat-container">
        <ChatSidebar />
        <div className="chat-body">{teste && <ChatBody />}</div>
      </div>
    </>
  );
};

export default Chats;
