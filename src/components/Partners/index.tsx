import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    { name: "Partner 1", logo: "https://via.placeholder.com/150" },
    { name: "Partner 2", logo: "https://via.placeholder.com/150" },
    { name: "Partner 3", logo: "https://via.placeholder.com/150" },
    { name: "Partner 4", logo: "https://via.placeholder.com/150" }
  ];

  return (
    <section className="py-16 px-4 bg-navy-800">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold text-center mb-12 text-gold-400">
          לקוחות מרוצים
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-[120px] opacity-50 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;