import React from 'react';
import { AssistantIcon, Message } from '/shared/ui';

interface BotMessageProps {
  text: string;
}

const BotMessage: React.FC<BotMessageProps> = ({ text }) => {
  return (
    <>
      <AssistantIcon/>
      <Message text={text} messageType="assistant" />
    </>
  );
};

export default BotMessage;

