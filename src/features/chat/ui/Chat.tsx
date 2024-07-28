import React, { useState } from "react";
import {
  ChatHeader,
  ChatField,
  MessageFromBot,
  MessageFromUser,
  MessageInput,
} from "/entities/chat";
import { getBotResponse } from "../api/chatApi";
import type { ChatCompletionRequestMessage } from "openai-edge";

interface ChatMessage {
  role: "assistant" | "user";
  text: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", text: "Привет! Чем я могу помочь?" },
    { role: "user", text: "Привет бот" },
  ]);

  const handleSendMessage = async (message: string) => {
    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", text: message },
    ];
    setMessages(newMessages);

    const botResponse = await getBotResponse(
      newMessages.map(({ role, text }) => ({
        role,
        content: text,
      })) as ChatCompletionRequestMessage[]
    );

    setMessages([...newMessages, { role: "assistant", text: botResponse }]);
  };

  return (
    <div className="chat-container">
      <div className="chat">
        <ChatHeader />
        <ChatField>
          {messages.map((message, index) =>
            message.role === "assistant" ? (
              <MessageFromBot key={index} text={message.text} />
            ) : (
              <MessageFromUser key={index} text={message.text} />
            )
          )}
        </ChatField>
        <MessageInput onSend={handleSendMessage} />
      </div>
    </div>
  );
};

export default Chat;
