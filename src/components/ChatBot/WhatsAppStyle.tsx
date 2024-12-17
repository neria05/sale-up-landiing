import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_URL } from '../../config/constants';

const WhatsAppStyle = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_URL, '_blank');
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 left-6 w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden z-50"
          >
            <div className="bg-[#25D366] p-6 relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-white text-xl font-bold mb-2">היי! 👋</h3>
              <p className="text-white/90">
                אשמח לעזור לך! אפשר לשוחח איתי בוואטסאפ
              </p>
            </div>
            <div className="p-6 bg-gray-50">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                התחל שיחה
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppStyle;