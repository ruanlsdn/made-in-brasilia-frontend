import { AiOutlineSearch } from "react-icons/ai";
import ChatSidebarLinks from "../ChatSidebarLinks/ChatSidebarLinks";

const chats = [
  {
    displayName: "ruanlsdn",
    lastMessage: "hello",
  },
  {
    displayName: "user1",
    lastMessage: "hello22",
  },
  {
    displayName: "user2",
    lastMessage: "hello33",
  },
  {
    displayName: "user3",
    lastMessage: "hello44",
  },
];

const ChatSidebar = () => {
  return (
    <div className="chat-available-chats">
      <div className="chat-available-chats-header">
        <input type="text" className="" />
        <button>
          <AiOutlineSearch size={30} />
        </button>
      </div>
      {chats.map((chat, index) => (
        <ChatSidebarLinks
          key={index}
          displayName={chat.displayName}
          lastMessage={chat.lastMessage}
        />
      ))}
    </div>
  );
};

export default ChatSidebar;
