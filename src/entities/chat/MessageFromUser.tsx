import React from "react";
import { Message } from "/shared/ui";
import UserIcon from "/shared/ui/UserIcon";

interface UserMessageProps {
  text: string;
}

const UserMessage: React.FC<UserMessageProps> = ({ text }) => {
  return (
    <div className="message-entity user">
      <Message text={text} messageType="user" />
      <UserIcon />
    </div>
  );
};

export default UserMessage;
