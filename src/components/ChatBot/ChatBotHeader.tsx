import React from 'react';
import { Bot, X } from 'lucide-react';

interface ChatBotHeaderProps {
  onClose: () => void;
}

const ChatBotHeader = ({ onClose }: ChatBotHeaderProps) => {
  return (
    <div className="p-4 bg-navy-900 border-b border-gold-400/20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Bot className="w-6 h-6 text-gold-400" />
        <h3 className="text-gold-400 font-bold">סיילאפ בוט</h3>
      </div>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-gold-400 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ChatBotHeader;