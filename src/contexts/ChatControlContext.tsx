import { DocumentData, DocumentReference } from "firebase/firestore";
import React, { createContext, useContext, useState } from "react";
import { iMessage } from "../interfaces/iMessage";
import { iFirebaseUser } from "../interfaces/iFirebaseUser";

type ChatControlContextProps = {
  messages: iMessage[];
  setMessages: React.Dispatch<React.SetStateAction<iMessage[]>>;
  showBody: boolean;
  setShowBody: React.Dispatch<React.SetStateAction<boolean>>;
  selectedUser: iFirebaseUser | null;
  setSelectedUser: React.Dispatch<React.SetStateAction<iFirebaseUser | null>>;
  selectedDocument: DocumentReference<DocumentData> | null;
  setSelectedDocument: React.Dispatch<
    React.SetStateAction<DocumentReference<DocumentData> | null>
  >;
};

const ChatControlContext = createContext<ChatControlContextProps>(null!);

type ChildrenProps = {
  children: React.ReactNode;
};

export const ChatControlProvider = ({ children }: ChildrenProps) => {
  const [messages, setMessages] = useState<iMessage[]>([]);
  const [showBody, setShowBody] = useState(false);
  const [selectedUser, setSelectedUser] = useState<iFirebaseUser | null>(null);
  const [selectedDocument, setSelectedDocument] =
    useState<DocumentReference<DocumentData> | null>(null);

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
