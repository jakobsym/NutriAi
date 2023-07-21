import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import react from '@vitejs/plugin-react-swc';

dotenv.config(); // load env vars from .env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add server for dev server options
  server: {
    port:3000
  },
});
