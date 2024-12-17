/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3ff',
          100: '#e4e9ff',
          200: '#cbd5ff',
          300: '#a7b7ff',
          400: '#8293ff',
          500: '#5c6cff',
          600: '#3a47ff',
          700: '#2a35ff',
          800: '#161e4d',
          900: '#0c1033',
        },
        gold: {
          50: '#fff9eb',
          100: '#ffefc4',
          200: '#ffe49d',
          300: '#ffd876',
          400: '#ffc94f',
          500: '#ffba28',
          600: '#ffa801',
          700: '#cc8600',
          800: '#a66d00',
          900: '#7a5100',
        }
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    },
  },
  plugins: [],
};