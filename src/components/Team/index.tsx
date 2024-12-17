import React from 'react';
import { motion } from 'framer-motion';
import TeamMember from './TeamMember';
import TeamBackground from './TeamBackground';

const Team = () => {
  const teamMembers = [
    {
      name: 'עפרי משאלי',
      role: 'מומחה לאוטומציה ופתרונות טכנולוגיים',
      image: 'https://i.ibb.co/3vPTpKf/5936cc46-e167-47aa-a6a3-5457b6f25052.jpg',
      description: 'מלווה את לקוחות החברה בתהליך הטמעת הפתרונות, תוך שמירה על שירות מקצועי ואיכותי.'
    },
    {
      name: 'נריה צייטקין',
      role: 'יזם ומומחה לפתרונות דיגיטליים',
      image: 'https://i.ibb.co/zrpKRR9/out-0-1.png',
      description: 'מתמחה בבניית מערכות מותאמות אישית ואוטומציות. מסייע בייעול תהליכי המכירה והשירות ומביא עסקים לשלב הבא!'
    },
    {
      name: 'אלעד',
      role: 'מנכ"ל',
      image: 'https://i.ibb.co/hgd3p4B/e1780042-c2e0-464d-8ea3-083664d7f36b.jpg',
      description: 'מוביל את החזון והאסטרטגיה של החברה, תוך התמקדות בחדשנות ומצוינות טכנולוגית.'
    }
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <TeamBackground />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gold-400">
            הכירו את הצוות שלנו
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            הצוות שלנו כולל מהנדסי תוכנה, מפתחים ואנשי מקצוע בעלי ניסיון רחב בטכנולוגיה ובאינטגרציות מערכתיות.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              {...member}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;