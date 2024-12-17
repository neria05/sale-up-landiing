import React from 'react';
import { motion } from 'framer-motion';

interface IntegrationCardProps {
  name: string;
  logo: string;
  description: string;
  index: number;
}

const IntegrationCard = ({ name, logo, description, index }: IntegrationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center gap-4 group hover:bg-white/10 transition-all border border-gold-400/10 hover:border-gold-400/30"
    >
      <div className="h-16 flex items-center justify-center transform group-hover:scale-110 transition-transform">
        <img
          src={logo}
          alt={name}
          className="h-12 w-auto object-contain filter brightness-0 invert opacity-75 group-hover:opacity-100 transition-all"
        />
      </div>
      <div className="text-center">
        <h3 className="text-gold-400 font-medium mb-1">{name}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default IntegrationCard;