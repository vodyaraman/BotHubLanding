import React from 'react';
import { AssistantIcon, Message } from '/shared/ui';

interface BotMessageProps {
  text: string;
}

const BotMessage: React.FC<BotMessageProps> = ({ text }) => {
  return (
    <div className="message-entity assistant">
      <div className="bot-name">Gemini</div>
      <AssistantIcon/>
      <Message text={text} messageType="assistant" />
    </div>
  );
};

export default BotMessage;

