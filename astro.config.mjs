// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';


import svelte from '@astrojs/svelte';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [svelte(), preact()]
  
  
});