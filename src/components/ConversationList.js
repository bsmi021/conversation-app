// src/components/ConversationList.js
import React from 'react';
import { Link } from 'react-router-dom';

const ConversationList = ({ conversations }) => {
    return (
      <div className="conversation-list">
        <h2>Conversations</h2>
        <ul>
          {conversations.map((conversation, index) => {
          
            return (
              <li key={index}>
                <Link to={`/conversation/${index}`}>{conversation.title || 'Untitled Conversation'}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  

export default ConversationList;
