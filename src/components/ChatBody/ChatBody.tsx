import {
  doc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { useAuthControlContext } from "../../contexts/AuthControlContext";
import { useChatControlContext } from "../../contexts/ChatControlContext";
import { db } from "../../services/firebase";

const ChatBody = () => {
  const { user } = useAuthControlContext();
  const { messages, setMessages, selectedDocument, selectedUser } =
    useChatControlContext();
  const [promptText, setPromptText] = useState("");
  const docRef = doc(db, "chats", selectedDocument.id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const currentMessages = (await getDoc(docRef)).data().messages;
      const newMessage = {
        userId: user?.id,
        text: promptText,
        createdAt: new Date(),
      };
      const updatedMessages = [...currentMessages, newMessage];
      await updateDoc(docRef, { messages: updatedMessages });
      setPromptText("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (chatSnapshot) => {
      const messages = chatSnapshot.data().messages;
      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="chat-body-header">
        <FaUserCircle className="single-chat-icon" size={10} color={"white"} />
        <h1>{selectedUser.username}</h1>
      </div>
      <div className="chat-body-content gradient-bg">
        {messages.map((item, index) => (
          <div
            key={index}
            className={`chat-body-message  ${
              item?.userId != user?.id ? "" : "chat-body-message-reverse"
            }`}
          >
            <p>{item?.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-prompt">
        <input
          type="text"
          value={promptText}
          onChange={(e) => setPromptText(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSend size={35} />
        </button>
      </form>
    </>
  );
};
export default ChatBody;
