import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  text: string;
}

interface PricingCardProps {
  title: string;
  price?: string;
  monthly?: string;
  features?: Feature[];
  enterpriseFeatures?: Feature[];
  description?: string;
  setupTime?: string;
  ctaText: string;
  ctaLink: string;
  featured?: boolean;
}

const PricingCard = ({
  title,
  price,
  monthly,
  features,
  enterpriseFeatures,
  description,
  setupTime,
  ctaText,
  ctaLink,
  featured = false
}: PricingCardProps) => {
  const isEnterprise = !!enterpriseFeatures;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`rounded-2xl p-8 ${
        featured 
          ? 'bg-gradient-to-br from-gold-400/20 to-gold-600/20 border-2 border-gold-400'
          : 'bg-navy-800 border border-gold-400/20'
      } relative overflow-hidden`}
    >
      {featured && (
        <div className="absolute top-4 right-4">
          <span className="bg-gold-400 text-navy-900 text-sm font-medium px-3 py-1 rounded-full">
            מומלץ
          </span>
        </div>
      )}

      <h3 className="text-2xl font-bold mb-4 text-gold-400">{title}</h3>
      
      {isEnterprise ? (
        <div className="mb-6">
          <p className="text-gray-300 text-lg">{description}</p>
        </div>
      ) : (
        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-gold-400">₪{price}</span>
            <span className="text-gray-400">הקמה</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-semibold text-gold-400">₪{monthly}</span>
            <span className="text-gray-400"> / חודש</span>
          </div>
          {setupTime && (
            <div className="mt-2 text-gray-400">
              זמן הקמה: {setupTime}
            </div>
          )}
        </div>
      )}

      <div className="space-y-4 mb-8">
        {isEnterprise ? (
          <>
            <p className="font-medium text-gold-400 mb-2">יתרונות המערכת המתקדמת:</p>
            {enterpriseFeatures?.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-300">
                {feature.icon}
                <span>{feature.text}</span>
              </div>
            ))}
          </>
        ) : (
          <>
            <p className="font-medium text-gold-400 mb-2">כלול בחבילה:</p>
            {features?.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-300">
                {feature.icon}
                <span>{feature.text}</span>
              </div>
            ))}
          </>
        )}
      </div>

      <motion.a
        href={ctaLink}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-3 px-6 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
          featured
            ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 hover:from-gold-500 hover:to-gold-700'
            : 'bg-navy-900 text-gold-400 border border-gold-400 hover:bg-gold-400/10'
        }`}
      >
        {ctaText}
        <ArrowRight className="w-5 h-5" />
      </motion.a>
    </motion.div>
  );
};

export default PricingCard;