import React from 'react';
import { Message } from '/shared/ui';

interface UserMessageProps {
  text: string;
}

const UserMessage: React.FC<UserMessageProps> = ({ text }) => {
  return (
    <Message text={text} messageType="user" />
  );
};

export default UserMessage;

