import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
  index: number;
}

const TeamMember = ({ name, role, image, description, index }: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-navy-800 border border-gold-400/20 transition-all duration-300 hover:border-gold-400/40 hover:shadow-gold">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-gold-400">{name}</h3>
          <p className="text-lg font-medium text-gray-300 mb-4">{role}</p>
          <p className="text-gray-400">{description}</p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-navy-800 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;