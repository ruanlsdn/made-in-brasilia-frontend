import { ChatBody, ChatSidebar, Navbar } from "../../components";
import { useChatControlContext } from "../../contexts/ChatControlContext";
import "./chats.css";

const Chats = () => {
  const { showBody } = useChatControlContext();
  return (
    <>
      <div className="gradient-bg">
        <Navbar />
      </div>
      <div className="chat-container">
        <ChatSidebar />
        <div className="chat-body scale-up-hor-center-02">
          {showBody && <ChatBody />}
        </div>
      </div>
    </>
  );
};

export default Chats;
