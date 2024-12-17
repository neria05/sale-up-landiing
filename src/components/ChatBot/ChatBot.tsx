import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatBotButton from './ChatBotButton';
import ChatBotHeader from './ChatBotHeader';
import ChatBotMessages from './ChatBotMessages';
import ChatBotInput from './ChatBotInput';
import { useChatBot } from './useChatBot';

const ChatBot = () => {
  const {
    isOpen,
    setIsOpen,
    messages,
    input,
    setInput,
    isLoading,
    handleSubmit,
    handleClose
  } = useChatBot();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <ChatBotButton onClick={() => setIsOpen(true)} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-96 h-[600px] bg-navy-800 rounded-2xl shadow-2xl overflow-hidden z-50 border border-gold-400/20"
          >
            <ChatBotHeader onClose={handleClose} />
            <ChatBotMessages
              messages={messages}
              isLoading={isLoading}
              messagesEndRef={messagesEndRef}
            />
            <ChatBotInput
              input={input}
              onChange={(e) => setInput(e.target.value)}
              onSubmit={handleSubmit}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;