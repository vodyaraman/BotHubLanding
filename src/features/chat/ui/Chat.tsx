import React, { useState, useEffect, useRef } from "react";
import {
  ChatHeader,
  ChatField,
  MessageFromUser,
  MessageInput,
  MessageFromBot,
} from "/entities/chat";
import { getBotResponse } from "../api/chatApi";
import type { ChatCompletionRequestMessage } from "openai-edge";

interface ChatMessage {
  role: "assistant" | "user";
  text: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const chatFieldRef = useRef<HTMLDivElement>(null); // Ref для контейнера сообщений

  // Load messages from localStorage on component mount
  useEffect(() => {
    const storedMessages = localStorage.getItem("chatMessages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    } else {
      // Set initial messages if none exist in localStorage
      setMessages([
        { role: "user", text: "Привет бот" },
        { role: "assistant", text: "Привет! Чем я могу помочь?" },
      ]);
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatFieldRef.current) {
      chatFieldRef.current.scrollTop = chatFieldRef.current.scrollHeight;
    }
  }, [messages]);

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
        <div className="glittering-shimmering-ridiculos-hullabaloo" />
        <ChatHeader />
        <ChatField ref={chatFieldRef}>
          {messages.map((message, index) =>
            message.role === "user" ? (
              <MessageFromUser key={index} text={message.text} />
            ) : (
              <MessageFromBot key={index} text={message.text} />
            )
          )}
        </ChatField>
        <MessageInput onSend={handleSendMessage} />
      </div>
    </div>
  );
};

export default Chat;
