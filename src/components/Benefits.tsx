import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Clock, DollarSign, Users, BarChart } from 'lucide-react';

const benefits = [
  {
    icon: <Bot className="w-12 h-12" />,
    title: "מענה אוטומטי 24/7",
    description: "המערכת זמינה תמיד לשירות לקוחותיך, ללא הפסקה וללא עייפות"
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "חיסכון של עד 90% בעלויות",
    description: "הפחתה משמעותית בהוצאות על שירות לקוחות ומכירות"
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: "חיסכון בזמן יקר",
    description: "פינוי זמן להתמקד בפיתוח העסק במקום בשירות לקוחות"
  },
  {
    icon: <DollarSign className="w-12 h-12" />,
    title: "הגדלת מכירות",
    description: "מערכת חכמה שמזהה הזדמנויות מכירה ומגדילה את ההכנסות"
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "שיפור חווית לקוח",
    description: "מענה מהיר ומקצועי שמשפר את שביעות רצון הלקוחות"
  },
  {
    icon: <BarChart className="w-12 h-12" />,
    title: "נתונים ותובנות",
    description: "קבלת דוחות מפורטים על ביצועים ומגמות בעסק"
  }
];

const Benefits = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-navy-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-navy-800">
            למה לבחור במערכת שלנו?
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            הפתרון האוטומטי המושלם שיעזור לך להגדיל מכירות, לחסוך בעלויות ולפנות זמן יקר
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6 text-gold-500 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy-800">{benefit.title}</h3>
              <p className="text-navy-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;