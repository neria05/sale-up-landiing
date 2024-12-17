import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

interface ChatBotButtonProps {
  onClick: () => void;
}

const ChatBotButton = ({ onClick }: ChatBotButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-gold-400 text-navy-900 p-4 rounded-full shadow-lg hover:bg-gold-500 transition-colors z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageSquare className="w-6 h-6" />
    </motion.button>
  );
};

export default ChatBotButton;