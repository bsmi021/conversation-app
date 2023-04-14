import React from 'react'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConversationList from "./components/ConversationList";
import ConversationPage from "./components/ConversationPage";
import FileUploader from "./components/FileUploader";

function App() {

  const [conversations, setConversations] = React.useState([]);

  const handleFileUpload = (jsonData) => {
    // log the data to the console
    console.log('jsonData', jsonData);
    setConversations(conversations.concat(jsonData));
  };

  return (
    <Router>
      <div className="App">
        <FileUploader onFileSelected={handleFileUpload} />
        <Routes>
        <Route path="/" element={<ConversationList conversations={conversations} />} />
          <Route
            path="/conversation/:id"
            element={<ConversationPage conversations={conversations} />}
          />
           </Routes>
      </div>
    </Router>
  );
}

export default App;
