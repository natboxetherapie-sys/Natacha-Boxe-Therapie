// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://natboxetherapie-sys.github.io',
  base: '/Natacha-Boxe-Therapie',
  integrations: [sitemap()],
});