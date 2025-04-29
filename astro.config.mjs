// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node'
import clerk from '@clerk/astro'
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [clerk()],
  adapter: node({ mode: 'standalone' }),
  output: 'server',
});