import React from 'react';
import PricingCard from './PricingCard';
import { motion } from 'framer-motion';
import { Bot, Zap, Calendar, MessageSquare, BarChart, Workflow, Database, Settings } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      title: "מערכת סיילאפ",
      price: "950",
      monthly: "500",
      features: [
        {
          icon: <Bot className="w-5 h-5" />,
          text: "מערכת צ'אט חכמה לניהול שיחות"
        },
        {
          icon: <MessageSquare className="w-5 h-5" />,
          text: "מענה אוטומטי לשאלות נפוצות"
        },
        {
          icon: <Calendar className="w-5 h-5" />,
          text: "ניהול תורים ופגישות בסיסי"
        },
        {
          icon: <BarChart className="w-5 h-5" />,
          text: "דוחות ביצועים בסיסיים"
        }
      ],
      setupTime: "יומיים",
      ctaText: "קבע פגישת ייעוץ",
      ctaLink: "#contact"
    },
    {
      title: "מערכת סיילאפ מתקדמת",
      description: "פתרון מותאם אישית לעסק שלך",
      enterpriseFeatures: [
        {
          icon: <Workflow className="w-5 h-5" />,
          text: "אוטומציות מתקדמות מותאמות אישית"
        },
        {
          icon: <Database className="w-5 h-5" />,
          text: "אינטגרציה עם מערכות קיימות"
        },
        {
          icon: <Settings className="w-5 h-5" />,
          text: "התאמה מלאה לתהליכי העבודה שלך"
        },
        {
          icon: <Zap className="w-5 h-5" />,
          text: "פיתוח פתרונות ייחודיים לעסק"
        }
      ],
      ctaText: "קבע פגישת ייעוץ",
      ctaLink: "#contact",
      featured: true
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gold-400">
            בחר את המסלול המתאים לך
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            אנחנו מציעים פתרונות גמישים שמתאימים לכל גודל של עסק, עם אפשרות להתאמה מלאה לצרכים שלך
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;