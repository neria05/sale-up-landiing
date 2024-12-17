import React from 'react';
import FeatureCard from './FeatureCard';
import { Bot, Calendar, MessageSquare, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "שיחות מכירה אוטומטיות",
      description: "סגירת עסקאות בקלות ויעילות באמצעות בוטים חכמים"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "תיאום פגישות",
      description: "מערכת חכמה לקביעת תורים ופגישות באופן אוטומטי"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "מידע בזמן אמת",
      description: "מענה מיידי ומדויק לשאלות לקוחות"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "חיסכון בזמן",
      description: "אוטומציה של תהליכים חוזרים ומשימות שגרתיות"
    }
  ];

  return (
    <section id="features" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-gold-400">
          היתרונות שלנו
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;