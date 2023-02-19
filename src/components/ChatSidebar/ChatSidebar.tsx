import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useAuthControlContext } from "../../contexts/AuthControlContext";
import { useChatControlContext } from "../../contexts/ChatControlContext";
import { db } from "../../services/firebase";
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
  const [searchInput, setSearchInput] = useState("");
  const { user } = useAuthControlContext();
  const { selectedUser, setSelectedUser } = useChatControlContext();
  const [chats, setChats] = useState([]);

  const handleSearch = async () => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("username", "==", searchInput));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setSelectedUser(doc.data());
        setSearchInput("");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAvailableChats = async () => {
    const chatsRef = collection(db, "chats");
    const q = query(chatsRef, where("users", "array-contains", user?.id));

    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const chatsArray = [];
        querySnapshot.forEach((doc) => {
          chatsArray.push(doc.data());
          setChats(chatsArray);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   fetchAvailableChats();
  // }, []);

  return (
    <div className="chat-available-chats">
      <div className="chat-available-chats-header">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch}>
          <AiOutlineSearch size={30} />
        </button>
      </div>
      {selectedUser && <ChatSidebarLinks />}
      {chats.map((chat, index) => (
        <ChatSidebarLinks key={index} />
      ))}
    </div>
  );
};

export default ChatSidebar;
