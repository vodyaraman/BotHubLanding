import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MessageProps {
  text: string;
  messageType: 'assistant' | 'user';
}

const Message: React.FC<MessageProps> = ({ text, messageType }) => {

  const formattedText = text.split('\n').join('  \n');

  return (
    <div className={`message message-${messageType}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {formattedText}
      </ReactMarkdown>
    </div>
  );
};

export default Message;

