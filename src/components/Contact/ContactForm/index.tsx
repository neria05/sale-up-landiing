import React from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import useContactForm from './useContactForm';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';

const ContactForm = () => {
  const { formData, errors, loading, handleChange, handleSubmit } = useContactForm();

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-navy-800 rounded-xl border border-gold-400/20 p-8 max-w-2xl mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <FormInput
          label="שם מלא"
          name="fullName"
          value={formData.fullName}
          error={errors.fullName}
          onChange={handleChange}
          required
        />
        
        <FormInput
          label="טלפון"
          name="phone"
          type="tel"
          value={formData.phone}
          error={errors.phone}
          onChange={handleChange}
          required
        />

        <div className="md:col-span-2">
          <FormInput
            label="אימייל"
            name="email"
            type="email"
            value={formData.email}
            error={errors.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="md:col-span-2">
          <FormTextArea
            label="הודעה"
            name="message"
            value={formData.message}
            error={errors.message}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={loading}
        className="mt-8 w-full bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:from-gold-500 hover:to-gold-700 transition-all disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            שולח...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            שלח פנייה
          </>
        )}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;