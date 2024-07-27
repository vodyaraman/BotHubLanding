import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        '/shared': '/src/shared/',
        '/features': '/src/features',
        '/entities': '/src/entities',
        '/widgets': '/src/widgets',
        '/app': '/src/app',
      },
    },
    plugins: [
      commonjs(),
    ],
  },
});

