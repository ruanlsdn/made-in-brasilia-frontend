import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FiUser } from "react-icons/fi";

const messages = [
  {
    message: "Hello world",
  },
  {
    message: "Hello world",
  },
  {
    message: "Hello world",
  },
  {
    message: "Hello world",
  },
  {
    message: "Hello world",
  },
  {
    message: "Hello world",
  },
  {
    message: "Hello world",
  },
  {
    message:
      "Hello worldHello worldHello worldHello worldHello worldHello world",
  },
  {
    message: "Hello world",
  },
  {
    message: "Hello world",
  },
  {
    message: "Hello world",
  },
  {
    message: "Hello world",
  },
];

const ChatBody = () => {
  return (
    <>
      <div className="chat-body-header">
        <FiUser className="single-chat-icon" size={10} />
        <h1>ruanlsdn</h1>
      </div>
      <div className="chat-body-content">
        {messages.map((message, index) => (
          <div
            className={`chat-body-message  ${
              index % 2 === 0 ? "" : "chat-body-message-reverse"
            }`}
          >
            <p>{message.message}</p>
          </div>
        ))}
      </div>
      <div className="chat-prompt">
        <input type="text" />
        <button>
          <AiOutlineSend size={35} />
        </button>
      </div>
    </>
  );
};
export default ChatBody;
