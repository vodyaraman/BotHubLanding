import React, { forwardRef } from 'react';

interface ChatProps {
  children: React.ReactNode;
}

// Используем forwardRef для передачи ref внутрь компонента
const Chat = forwardRef<HTMLDivElement, ChatProps>(({ children }, ref) => {
  return (
    <div className="message-container" ref={ref}>
      {children}
    </div>
  );
});

export default Chat;

