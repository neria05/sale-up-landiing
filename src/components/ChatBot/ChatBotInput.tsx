import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface ChatBotInputProps {
  input: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ChatBotInput = ({ input, onChange, onSubmit }: ChatBotInputProps) => {
  return (
    <form onSubmit={onSubmit} className="p-4 border-t border-gold-400/20">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={onChange}
          placeholder="הקלד הודעה..."
          className="flex-1 bg-navy-900 text-gray-200 p-2 rounded-lg border border-gold-400/20 focus:outline-none focus:border-gold-400"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-gold-400 text-navy-900 p-2 rounded-lg hover:bg-gold-500 transition-colors"
        >
          <Send className="w-5 h-5" />
        </motion.button>
      </div>
    </form>
  );
};

export default ChatBotInput;