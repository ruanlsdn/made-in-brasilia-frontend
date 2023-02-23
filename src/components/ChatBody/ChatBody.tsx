import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useAuthControlContext } from "../../contexts/AuthControlContext";
import { useChatControlContext } from "../../contexts/ChatControlContext";
import { iMessage } from "../../interfaces/iMessage";
import { db } from "../../services/firebase";

const ChatBody = () => {
  const { user } = useAuthControlContext();
  const { messages, setMessages, selectedDocument, selectedUser } =
    useChatControlContext();
  const [promptText, setPromptText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const docRef = doc(db, "chats", selectedDocument!.id);
  const [scroll, setScroll] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const currentMessages = (await getDoc(docRef)).data()?.messages;
      const newMessage = {
        userId: user?.id,
        text: promptText,
        createdAt: new Date(),
      };
      const updatedMessages = [...currentMessages, newMessage];
      await updateDoc(docRef, { messages: updatedMessages });
      setPromptText("");
      setScroll((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [scroll]);

  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (chatSnapshot) => {
      const messages: iMessage[] = chatSnapshot.data()?.messages;
      setMessages(messages);
    });

    return () => unsubscribe();
  }, [docRef]);

  return (
    <>
      <div className="chat-body-header">
        <FaUserCircle className="single-chat-icon" size={10} color={"white"} />
        <h1>{selectedUser?.username}</h1>
      </div>
      <div className="chat-body-content gradient-bg">
        {messages.map((item, index) => (
          <>
            <div
              key={index}
              className={`chat-body-message  ${
                item?.userId != user?.id ? "" : "chat-body-message-reverse"
              }`}
            >
              <p>{item?.text}</p>
            </div>
            <div ref={messagesEndRef} />
          </>
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
