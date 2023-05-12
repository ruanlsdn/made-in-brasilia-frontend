import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useAuthControlContext } from "../../contexts/AuthControlContext";
import { iChat } from "../../interfaces/iChat";
import { iFirebaseUser } from "../../interfaces/iFirebaseUser";
import { db } from "../../services/firebase";
import ChatSidebarLinks from "../ChatSidebarLinks/ChatSidebarLinks";
import { iMessage } from "../../interfaces/iMessage";

const ChatSidebar = () => {
  const { user } = useAuthControlContext();
  const [searchInput, setSearchInput] = useState("");
  const [searchUser, setSearchUser] = useState<iFirebaseUser | null>(null);
  const [chats, setChats] = useState<iChat[]>([]);

  const handleSearch = async () => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("username", "==", searchInput));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setSearchUser(doc.data() as iFirebaseUser);
        setSearchInput("");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAvailableChats = async () => {
    const chatsRef = collection(db, "chats");
    const q = query(
      chatsRef,
      where("users", "array-contains", user?.id),
      orderBy("createdAt", "desc")
    );

    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const chatsArray: iChat[] = [];
        querySnapshot.forEach((doc) => {
          chatsArray.push(doc.data() as iChat);
          setChats(chatsArray);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAvailableChats();
  }, []);

  return (
    <div className="chat-available-chats">
      <div className="chat-available-chats-header">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Pesquisar por um usuário..."
        />
        <button onClick={handleSearch}>
          <AiOutlineSearch size={30} />
        </button>
      </div>
      {searchUser && (
        <ChatSidebarLinks receiverId={searchUser.id} lastMessage={undefined} />
      )}
      {chats.map((chat, index) => (
        <ChatSidebarLinks
          receiverId={chat.users.filter((item) => item != user?.id)[0]}
          key={index}
          lastMessage={chat.messages[chat.messages.length - 1]}
        />
      ))}
    </div>
  );
};

export default ChatSidebar;
