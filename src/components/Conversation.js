import React from "react";
import "./Conversation.css";
import { extractMessages } from "../utils/extractMessages";
import ReactMarkdown from "react-markdown";

const Conversation = ({ conversation }) => {
  const messages = extractMessages(conversation.mapping);

  const renderMessages = () => {
    return messages.map((message, index) => {
      const messageClass =
        message.sender === "user" ? "message user-message" : "message ai-message";
      return (
        <div key={index} className={messageClass}>
          <div className="message-content">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="conversation">
      <h2>{conversation?.title}</h2>
      <div className="messages-container">{renderMessages()}</div>
    </div>
  );
};

export default Conversation;
