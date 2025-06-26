import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
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
