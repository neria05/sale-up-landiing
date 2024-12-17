import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const ComparisonTable = () => {
  const features = [
    { name: 'זמין 24/7 ללא הפסקות או מגבלות', ai: true, regular: true, human: false },
    { name: 'מספק תגובה מיידית ללא זמני המתנה', ai: true, regular: true, human: false },
    { name: 'זוכר שיחות קודמות ומשתמש בהן כדי להתאים מענה', ai: true, regular: false, human: false },
    { name: 'פועל עצמאית, מתעדכן ומשתפר באופן שוטף', ai: true, regular: false, human: false },
    { name: 'לא מושפע מגורמים אנושיים', ai: true, regular: true, human: false },
    { name: 'לומד ומשתפר באמצעות ניתוח נתונים ואינטראקציות', ai: true, regular: false, human: false },
    { name: 'מתאים פתרונות אישיים על בסיס נתונים בזמן אמת', ai: true, regular: false, human: false },
    { name: 'עלות נמוכה במיוחד (חל פי 10 בהשוואה לרובוט)', ai: true, regular: false, human: false },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-navy-800 to-navy-900">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gold-400">
            למה בוט AI מתקדם הוא הבחירה החכמה ביותר לעסק שלך?
          </h2>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-right"></th>
                <th className="p-4 text-center text-gold-400">בוט AI</th>
                <th className="p-4 text-center text-gray-400">בוט רגיל</th>
                <th className="p-4 text-center text-gray-400">נציג אנושי</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-t border-gold-400/10"
                >
                  <td className="p-4 text-gray-300">{feature.name}</td>
                  <td className="p-4 text-center">
                    {feature.ai ? (
                      <Check className="w-6 h-6 text-gold-400 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-gray-500 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {feature.regular ? (
                      <Check className="w-6 h-6 text-gray-400 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-gray-500 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {feature.human ? (
                      <Check className="w-6 h-6 text-gray-400 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-gray-500 mx-auto" />
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;