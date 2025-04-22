import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/hcleaguesleaderboard/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['tsparticles-slim'],
  },
});
