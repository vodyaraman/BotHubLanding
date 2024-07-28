import React from 'react';
import { Message } from '/shared/ui';

interface BotMessageProps {
  text: string;
}

const BotMessage: React.FC<BotMessageProps> = ({ text }) => {
  return (
    <Message text={text} messageType="assistant" />
  );
};

export default BotMessage;

