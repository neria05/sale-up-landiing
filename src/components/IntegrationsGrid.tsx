import React from 'react';
import { motion } from 'framer-motion';

const integrations = [
  { name: 'Facebook', logo: '/images/integrations/facebook.png' },
  { name: 'Gmail', logo: '/images/integrations/gmail.png' },
  { name: 'Instagram', logo: '/images/integrations/instagram.png' },
  { name: 'TikTok', logo: '/images/integrations/tiktok.png' },
  { name: 'Wix', logo: '/images/integrations/wix.png' },
  { name: 'WordPress', logo: '/images/integrations/wordpress.png' },
  { name: 'Zapier', logo: '/images/integrations/zapier.png' },
  { name: 'Google Sheets', logo: '/images/integrations/sheets.png' },
];

const IntegrationsGrid = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-navy-900 to-navy-800">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gold-400">
            יכול להתחבר ליותר מ-150 תוכנות
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            וורדפרס, Gmail, Google Drive ,Zapier, מערכות CRM, יומן גוגל או יומנים אחרים, ועוד יותר מ-150 אינטגרציות אפשריות - ניתן לחבר את הבוט גם אם יש לך מערכת מיוחדת או מותאמת אישית לעסק.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-navy-700/50 rounded-xl p-6 flex items-center justify-center group hover:bg-navy-600/50 transition-colors border border-gold-400/10 hover:border-gold-400/30"
            >
              <img
                src={integration.logo}
                alt={integration.name}
                className="h-12 object-contain opacity-75 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 rounded-lg font-medium hover:from-gold-500 hover:to-gold-700 transition-all">
            לבדיקת התאמה לעסק
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsGrid;