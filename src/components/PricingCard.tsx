import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  monthly: string;
  features: string[];
  featured?: boolean;
}

function PricingCard({ title, price, monthly, features, featured = false }: PricingCardProps) {
  return (
    <div className={`rounded-2xl p-8 ${
      featured ? 'bg-blue-600 text-white' : 'bg-white'
    } shadow-lg transform hover:scale-105 transition duration-300`}>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="mb-6">
        <div className="text-3xl font-bold">₪{price}</div>
        <div className={featured ? 'text-blue-100' : 'text-gray-600'}>הקמה חד פעמית</div>
        <div className="mt-2">
          <span className="text-xl font-semibold">₪{monthly}</span>
          <span className={featured ? 'text-blue-100' : 'text-gray-600'}> / חודש</span>
        </div>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-lg transition ${
        featured
          ? 'bg-white text-blue-600 hover:bg-blue-50'
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}>
        בחר תכנית
      </button>
    </div>
  );
}

export default PricingCard;