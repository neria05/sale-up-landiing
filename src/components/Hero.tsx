import React from 'react';
import { motion } from 'framer-motion';
import { Bot, ArrowLeft } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Bot className="w-24 h-24 mx-auto text-gold-400" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-gold-400">המערכת האוטומטית</span>
            <br />
            שתעזור לך למכור יותר
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            הפתרון האוטומטי המושלם להגדלת המכירות, חיסכון בעלויות ופינוי זמן יקר
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg text-lg font-medium text-navy-900 hover:from-gold-500 hover:to-gold-700 transition-all flex items-center gap-2"
            >
              התחל עכשיו
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gold-400 text-gold-400 rounded-lg text-lg font-medium hover:bg-gold-400/10 transition-all"
            >
              קבע פגישת ייעוץ
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;