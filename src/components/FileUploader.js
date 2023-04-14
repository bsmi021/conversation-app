import React from "react";

const FileUploader = ({ onFileSelected }) => {
  const fileInputRef = React.createRef();

  const handleFileUpload = (event) => {
    event.preventDefault();
    const file = fileInputRef.current.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const jsonData = JSON.parse(e.target.result);
      onFileSelected(jsonData);
    };

    if (file) {
      reader.readAsText(file);
    }
  };

  return (
    <form onSubmit={handleFileUpload}>
      <input type="file" ref={fileInputRef} accept=".json" />
      <button type="submit">Upload ChatGPT History</button>
    </form>
  );
};

export default FileUploader;
