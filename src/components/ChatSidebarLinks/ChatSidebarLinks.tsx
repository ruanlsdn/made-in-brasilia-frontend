import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useAuthControlContext } from "../../contexts/AuthControlContext";
import { useChatControlContext } from "../../contexts/ChatControlContext";
import { db } from "../../services/firebase";

const ChatSidebarLinks = ({ receiverId }) => {
  const { user } = useAuthControlContext();
  const { selectedUser, setSelectedUser } = useChatControlContext();
  const [receiver, setReceiver] = useState(null);
  const { setMessages, setShowBody, setSelectedDocument } =
    useChatControlContext();

  const handleClick = async () => {
    const chatsRef = collection(db, "chats");
    const q = query(chatsRef, where("users", "array-contains", user?.id));

    try {
      const querySnapshot = await getDocs(q);
      const matchingDocs = querySnapshot.docs.filter((doc) => {
        const users = doc.data().users;
        return users.includes(user?.id) && users.includes(receiver.id);
      });

      if (matchingDocs.length === 0) {
        await addDoc(chatsRef, {
          users: [user?.id, receiver.id],
          messages: [],
          createdAt: serverTimestamp(),
        });
        return handleClick();
      } else {
        matchingDocs.forEach((doc) => {
          setSelectedDocument(doc.ref);
          setMessages(doc.data().messages);
          setShowBody(true);
          setSelectedUser(receiver);
        });
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(receiverId);
    const fetchUserReceiver = async () => {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("id", "==", receiverId));
      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setReceiver(doc.data());
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserReceiver();
  }, []);

  return (
    <div className="single-chat single-chat-hover" onClick={handleClick}>
      <FaUserCircle className="single-chat-icon" size={10} color={"white"} />
      <div className="single-chat-user-info">
        <h1>{receiver?.username}</h1>
        <p>{""}</p>
      </div>
    </div>
  );
};

export default ChatSidebarLinks;
