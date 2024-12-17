import { useState, useEffect, useCallback } from 'react';
import { Message } from './types';
import { BOT_API_URL, WELCOME_MESSAGE } from '../../config/constants';

export const useChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        text: WELCOME_MESSAGE,
        isBot: true,
        timestamp: new Date()
      }]);
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setMessages([]);
    setInput('');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(BOT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input })
      });
      
      if (!response.ok) throw new Error('Network response was not ok');
      
      const result = await response.json();
      setMessages(prev => [...prev, {
        text: result.response || "מצטער, לא הצלחתי לעבד את הבקשה. אנא נסה שוב.",
        isBot: true,
        timestamp: new Date()
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        text: "מצטער, נראה שיש בעיה בתקשורת. אנא נסה שוב מאוחר יותר.",
        isBot: true,
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isOpen,
    setIsOpen,
    messages,
    input,
    setInput,
    isLoading,
    handleSubmit,
    handleClose
  };
};