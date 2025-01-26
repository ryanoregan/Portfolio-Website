// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://ryanoregan.github.io/Portfolio-Website/",
  base: '/Portfolio-Website',
});
