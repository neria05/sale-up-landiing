import React from 'react';
import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../../config/constants';

interface CTAButtonProps {
  type?: 'chat' | 'whatsapp';
  children: React.ReactNode;
  className?: string;
}

const CTAButton = ({ type = 'chat', children, className = '' }: CTAButtonProps) => {
  const handleClick = () => {
    if (type === 'whatsapp') {
      window.open(WHATSAPP_URL, '_blank');
    } else {
      // Trigger chat bot
      const event = new CustomEvent('openChatBot');
      window.dispatchEvent(event);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 rounded-lg font-medium hover:from-gold-500 hover:to-gold-700 transition-all ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default CTAButton;