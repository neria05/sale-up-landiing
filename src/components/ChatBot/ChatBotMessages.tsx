import React from 'react';
import { motion } from 'framer-motion';
import { Message } from './types';

interface ChatBotMessagesProps {
  messages: Message[];
  isLoading: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

const ChatBotMessages = ({ messages, isLoading, messagesEndRef }: ChatBotMessagesProps) => {
  return (
    <div className="h-[calc(100%-8rem)] overflow-y-auto p-4 space-y-4">
      {messages.map((msg, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
        >
          <div
            className={`max-w-[80%] p-3 rounded-2xl ${
              msg.isBot
                ? 'bg-navy-700 text-gray-200'
                : 'bg-gold-400 text-navy-900'
            }`}
          >
            {msg.text}
          </div>
        </motion.div>
      ))}
      {isLoading && (
        <div className="flex justify-start">
          <div className="bg-navy-700 text-gray-200 p-3 rounded-2xl">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatBotMessages;