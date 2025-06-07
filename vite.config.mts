import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: 'public', // This tells Vite where to find index.html
  plugins: [react()],
  build: {
    outDir: '../dist', // Adjust output to go outside /public
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
