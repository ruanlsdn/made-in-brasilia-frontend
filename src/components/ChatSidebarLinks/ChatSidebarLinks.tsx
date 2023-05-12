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
import { iFirebaseUser } from "../../interfaces/iFirebaseUser";
import { iMessage } from "../../interfaces/iMessage";
import { db } from "../../services/firebase";

type ChatSidebarLinksProps = {
  receiverId: string;
  lastMessage: iMessage | undefined;
};

const ChatSidebarLinks = ({
  receiverId,
  lastMessage,
}: ChatSidebarLinksProps) => {
  const { user } = useAuthControlContext();
  const { setSelectedUser } = useChatControlContext();
  const [receiver, setReceiver] = useState<iFirebaseUser | null>(null);
  const { setMessages, setShowBody, setSelectedDocument } =
    useChatControlContext();

  const handleClick = async (): Promise<any> => {
    const chatsRef = collection(db, "chats");
    const q = query(chatsRef, where("users", "array-contains", user?.id));

    try {
      const querySnapshot = await getDocs(q);
      const matchingDocs = querySnapshot.docs.filter((doc) => {
        const users = doc.data().users;
        return users.includes(user?.id) && users.includes(receiver?.id);
      });

      if (matchingDocs.length === 0) {
        await addDoc(chatsRef, {
          users: [user?.id, receiver?.id],
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

  const showDate = () => {
    const lastDate: number | undefined = lastMessage?.createdAt.seconds;
    let date = "";

    if (lastDate) {
      new Date().toDateString() === new Date(lastDate! * 1000).toDateString()
        ? (date = new Date(lastDate! * 1000).toLocaleTimeString())
        : (date = new Date(lastDate! * 1000).toLocaleDateString());
    }

    return date;
  };

  useEffect(() => {
    const fetchUserReceiver = async () => {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("id", "==", receiverId));
      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setReceiver(doc.data() as iFirebaseUser);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserReceiver();
  }, []);

  return (
    <div className="single-chat single-chat-hover" onClick={handleClick}>
      <div>
        <FaUserCircle className="single-chat-icon" size={10} color={"white"} />
      </div>
      <div className="single-chat-user-info">
        <h1>{receiver?.username}</h1>
        <p>{lastMessage?.text}</p>
      </div>
      <div className="single-chat-date-info">
        <p>{showDate()}</p>
      </div>
    </div>
  );
};

export default ChatSidebarLinks;
