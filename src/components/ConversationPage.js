import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Conversation from "./Conversation";

const ConversationPage = ({ conversations }) => {
  const { id } = useParams();
  const [conversation, setConversation] = useState(null);

  useEffect(() => {
    setConversation(conversations[id]);
  }, [id, conversations]);

  return (
    <div className="conversation-page">
      {conversation ? <Conversation conversation={conversation} /> : <p>Loading...</p>}
    </div>
  );
};

export default ConversationPage;
