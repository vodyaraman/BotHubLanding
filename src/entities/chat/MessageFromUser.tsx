import React from "react";
import { Message } from "/shared/ui";
import UserIcon from "/shared/ui/UserIcon";

interface UserMessageProps {
  text: string;
}

const UserMessage: React.FC<UserMessageProps> = ({ text }) => {
  return (
    <>
      <UserIcon />
      <Message text={text} messageType="user" />
    </>
  );
};

export default UserMessage;
