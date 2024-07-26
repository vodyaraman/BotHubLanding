import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        '/shared': '/src/shared/',
        '/features': '/src/features',
        '/entities': '/src/entities',
        '/app': '/src/app',
      },
    },
  },
});
