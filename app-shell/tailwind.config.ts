import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../shared/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ...defaultTheme.colors,
        primary: {
          DEFAULT: '#228B22',
          light: '#2ecc71',
        },
        neutral: {
          DEFAULT: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};

export default config;
