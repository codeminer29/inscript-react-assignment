import type { Config } from 'tailwindcss'
import plugin from 'tailwind-scrollbar-hide'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#2563eb',
        lightGray: '#f4f4f5',
        headerGray: '#f1f5f9',
        borderGray: '#e5e7eb',
      },
    },
  },
  plugins: [
    plugin,
  ],
};

export default config;
