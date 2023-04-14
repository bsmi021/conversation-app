// src/utils/extractMessages.js
export const extractMessages = (mapping) => {
    let messages = [];
  
    for (const key in mapping) {
      if (mapping[key].message) {
        const { author, content } = mapping[key].message;
        const role = author.role;
        const messageContent = content.parts.join(' ');
  
        messages.push({
          sender: role,
          content: messageContent,
        });
      }
    }
  
    return messages;
  };
  