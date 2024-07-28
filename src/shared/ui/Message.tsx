import React from 'react';

interface MessageProps {
  text: string;
  messageType: 'assistant' | 'user';
}

const Message: React.FC<MessageProps> = ({ text, messageType }) => {
  return (
    <div className={`message message-${messageType}`}>
      {text}
    </div>
  );
};

export default Message;

