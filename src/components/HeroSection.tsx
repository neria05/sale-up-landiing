import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative py-32 px-4 text-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Bot className="w-24 h-24 mx-auto text-blue-600 animate-float" />
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-7xl font-bold text-blue-900 mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          המערכת האוטומטית
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            שתעזור לך למכור יותר
          </span>
        </motion.h1>

        <motion.p 
          className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          הפתרון האוטומטי המושלם להגדלת המכירות, חיסכון בעלויות ופינוי זמן יקר
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button className="group bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-2xl hover:scale-105">
            התחל עכשיו
            <Sparkles className="inline-block mr-2 w-5 h-5 animate-pulse" />
          </button>
          <button className="group px-8 py-4 rounded-xl text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all">
            קבע פגישת ייעוץ
          </button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default HeroSection;