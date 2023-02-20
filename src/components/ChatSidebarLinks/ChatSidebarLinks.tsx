import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { FaUserCircle } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { useAuthControlContext } from "../../contexts/AuthControlContext";
import { useChatControlContext } from "../../contexts/ChatControlContext";
import { db } from "../../services/firebase";

const ChatSidebarLinks = () => {
  const { user } = useAuthControlContext();
  const { selectedUser } = useChatControlContext();
  const { setMessages, setShowBody, setSelectedDocument } =
    useChatControlContext();

  const handleClick = async () => {
    const idsList = [user?.id, selectedUser.id];
    const chatsRef = collection(db, "chats");
    const q = query(chatsRef, where("users", "array-contains-any", idsList));

    try {
      const querySnapshot = await getDocs(q);

      const matchingDocs = querySnapshot.docs.filter((doc) => {
        const users = doc.data().users;
        return users.includes(user?.id) && users.includes(selectedUser.id);
      });

      if (matchingDocs.length === 0) {
        const ref = await addDoc(chatsRef, {
          users: [user?.id, selectedUser.id],
          messages: [],
          createdAt: serverTimestamp(),
        });
        setSelectedDocument(ref);
      } else {
        matchingDocs.forEach((doc) => {
          setSelectedDocument(doc.ref);
          setMessages(doc.data().messages);
          setShowBody(true);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="single-chat single-chat-hover" onClick={handleClick}>
      <FaUserCircle className="single-chat-icon" size={10} color={"white"} />
      <div className="single-chat-user-info">
        <h1>{selectedUser?.username}</h1>
        <p>{""}</p>
      </div>
    </div>
  );
};

export default ChatSidebarLinks;
