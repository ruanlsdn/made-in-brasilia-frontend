import React, { createContext, useContext, useState } from "react";

type ChatControlContextProps = {
  messages: [];
  setMessages: React.Dispatch<React.SetStateAction<[]>>;
  showBody: boolean;
  setShowBody: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatControlContext = createContext<ChatControlContextProps>(null!);

type ChildrenProps = {
  children: React.ReactNode;
};

export const ChatControlProvider = ({ children }: ChildrenProps) => {
  const [messages, setMessages] = useState([]);
  const [showBody, setShowBody] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState(null);

  return (
    <ChatControlContext.Provider
      value={{
        messages,
        setMessages,
        showBody,
        setShowBody,
        selectedUser,
        setSelectedUser,
        selectedDocument,
        setSelectedDocument,
      }}
    >
      {children}
    </ChatControlContext.Provider>
  );
};

export const useChatControlContext = () => useContext(ChatControlContext);
