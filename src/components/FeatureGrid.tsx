import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Calendar, MessageSquareText, Clock, Zap, Shield, Cloud, Settings } from 'lucide-react';

const features = [
  {
    icon: <Bot className="w-10 h-10" />,
    title: "שיחות מכירה אוטומטיות",
    description: "סגירת עסקאות בקלות ויעילות באמצעות בוטים חכמים"
  },
  {
    icon: <MessageSquareText className="w-10 h-10" />,
    title: "מידע בזמן אמת",
    description: "מענה מיידי ומדויק לשאלות לקוחות"
  },
  {
    icon: <Calendar className="w-10 h-10" />,
    title: "תיאום פגישות אוטומטי",
    description: "מערכת חכמה לקביעת תורים ופגישות"
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: "חיסכון בזמן",
    description: "אוטומציה של תהליכים חוזרים ומשימות שגרתיות"
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "ביצועים מהירים",
    description: "מערכת מהירה ויעילה לתוצאות מיידיות"
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "אבטחה מתקדמת",
    description: "הגנה מקסימלית על המידע העסקי שלך"
  },
  {
    icon: <Cloud className="w-10 h-10" />,
    title: "גיבוי בענן",
    description: "גיבוי אוטומטי של כל המידע בענן"
  },
  {
    icon: <Settings className="w-10 h-10" />,
    title: "התאמה אישית",
    description: "התאמה מלאה לצרכי העסק שלך"
  }
];

const FeatureGrid = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          הטכנולוגיה המתקדמת ביותר
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;