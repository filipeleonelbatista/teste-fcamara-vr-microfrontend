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
      name: 'app_shell',
      remotes: {
        header: 'http://localhost:3001/assets/remoteEntry.js',
        cards: 'http://localhost:3002/assets/remoteEntry.js',
        footer: 'http://localhost:3003/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-redux', '@reduxjs/toolkit'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
