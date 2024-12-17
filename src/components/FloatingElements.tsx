import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Database, Cloud, Settings, Shield } from 'lucide-react';

const FloatingElements = () => {
  const icons = [
    { Icon: Bot, color: 'text-blue-500', size: 'w-12 h-12', delay: 0 },
    { Icon: Zap, color: 'text-purple-500', size: 'w-10 h-10', delay: 0.2 },
    { Icon: Database, color: 'text-green-500', size: 'w-8 h-8', delay: 0.4 },
    { Icon: Cloud, color: 'text-pink-500', size: 'w-10 h-10', delay: 0.6 },
    { Icon: Settings, color: 'text-yellow-500', size: 'w-12 h-12', delay: 0.8 },
    { Icon: Shield, color: 'text-cyan-500', size: 'w-8 h-8', delay: 1 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none">
      {icons.map(({ Icon, color, size, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute ${size} ${color}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 3,
            delay,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            top: `${20 + (index * 15)}%`,
            left: `${10 + (index * 15)}%`
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;