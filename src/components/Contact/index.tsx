import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gold-400">
            רוצים לשמוע יותר?
          </h2>
          <p className="text-xl text-gray-300">
            מלאו את הפרטים כאן כדי שנוכל לחזור אליכם בהקדם ולהתחיל לעבוד על פתרון המותאם אישית לעסק שלכם!
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;