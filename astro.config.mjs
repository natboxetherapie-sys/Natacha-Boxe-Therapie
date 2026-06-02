// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.natacha-boxetherapie.fr',
  // base: '/Natacha-Boxe-Therapie',
  integrations: [sitemap()],
});