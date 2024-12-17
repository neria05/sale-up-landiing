import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-navy-800 p-6 rounded-xl border border-gold-400/20 hover:border-gold-400/40 transition-colors"
    >
      <div className="text-gold-400 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gold-400">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;