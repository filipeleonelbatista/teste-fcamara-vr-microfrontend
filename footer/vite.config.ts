import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/',
  plugins: [
    tailwindcss(),
    react(),
    federation({
      name: 'footer',
      filename: 'remoteEntry.js',
      exposes: {
        './Footer': './src/Footer.tsx',
      },
      shared: ['react', 'react-dom', 'react-redux', '@reduxjs/toolkit'],
    }),
  ],
    resolve: {
      alias: {
        shared: path.resolve(__dirname, '../shared'),
      },
    },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
