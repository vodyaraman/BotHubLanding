import React from 'react';
import { BotIcon } from '/shared/ui';

const ChatHeader: React.FC = () => {
  return (
    <div className="chat-header">
      <div className="chat-header-left">
        <BotIcon/>
        <div className="chat-header-title">
          <span>BotHub: ChatGPT & Midjourney</span>
          <span className="chat-header-subtitle">bot</span>
        </div>
      </div>
      <div className="chat-header-right">
        <label className="chat-header-save-context">
          Сохранить контекст
          <input type="checkbox" />
        </label>
      </div>
    </div>
  );
};

export default ChatHeader;

