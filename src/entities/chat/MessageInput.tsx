import React, { useState } from 'react';
import { SendButton } from '/shared/ui';

interface MessageInputProps {
  onSend: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSendClick = () => {
    if (inputValue.trim() === '') return;
    onSend(inputValue);
    setInputValue('');
  };

  return (
    <div className="chat-input-container">
      <input
        type="text"
        className="chat-input"
        placeholder="Спроси о чем-нибудь..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleSendClick();
        }}
      />
      <button className="chat-send-button" onClick={handleSendClick}>
        <SendButton/>
      </button>
    </div>
  );
};

export default MessageInput;

