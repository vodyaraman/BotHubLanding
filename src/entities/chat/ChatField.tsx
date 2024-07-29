import React from 'react';

interface ChatProps {
  children: React.ReactNode;
}

const Chat: React.FC<ChatProps> = ({ children }) => {
  return (
    <div className="message-container">
      {children}
    </div>
  );
};

export default Chat;

