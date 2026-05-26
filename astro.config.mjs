// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://natacha-boxe-therapie.vercel.app/',
  // base: '/Natacha-Boxe-Therapie',
  integrations: [sitemap()],
});