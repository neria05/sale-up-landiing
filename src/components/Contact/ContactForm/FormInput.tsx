import React from 'react';
import { AlertCircle } from 'lucide-react';

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  error?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({
  label,
  name,
  type = 'text',
  value,
  error,
  required,
  onChange,
}: FormInputProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
        {required && <span className="text-red-500 mr-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-2 bg-navy-900 border rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-colors ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-600 hover:border-gray-500'
        }`}
      />
      {error && (
        <div className="mt-1 flex items-center gap-1 text-red-500 text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default FormInput;