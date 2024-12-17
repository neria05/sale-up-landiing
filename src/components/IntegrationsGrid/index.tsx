import React from 'react';
import { motion } from 'framer-motion';
import IntegrationCard from './IntegrationCard';
import CTAButton from '../common/CTAButton';

const integrations = [
  {
    name: 'Facebook',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png',
    description: 'חיבור לעמוד העסקי שלך'
  },
  {
    name: 'Gmail',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png',
    description: 'שליחה וקבלה של מיילים'
  },
  {
    name: 'Instagram',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png',
    description: 'ניהול הודעות ותגובות'
  },
  {
    name: 'TikTok',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/TikTok_logo_wordmark.svg/2560px-TikTok_logo_wordmark.svg.png',
    description: 'ניהול תוכן והודעות'
  },
  {
    name: 'Wix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Wix.com_website_logo.svg/2560px-Wix.com_website_logo.svg.png',
    description: 'אינטגרציה מלאה עם האתר'
  },
  {
    name: 'WordPress',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png',
    description: 'התממשקות עם האתר שלך'
  },
  {
    name: 'Zapier',
    logo: 'https://cdn.worldvectorlogo.com/logos/zapier-1.svg',
    description: 'חיבור למאות שירותים'
  },
  {
    name: 'Google Sheets',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1498px-Google_Sheets_logo_%282014-2020%29.svg.png',
    description: 'ניהול נתונים אוטומטי'
  }
];

const IntegrationsGrid = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] bg-repeat opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
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
            <IntegrationCard key={index} {...integration} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <CTAButton type="whatsapp">
            לבדיקת התאמה לעסק
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsGrid;