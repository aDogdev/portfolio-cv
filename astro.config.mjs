import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://adogdev.github.io',
  base: '/portfolio-cv',

  vite: {
    plugins: [tailwindcss()],
  },
});