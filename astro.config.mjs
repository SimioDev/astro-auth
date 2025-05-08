// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node'
import clerk from '@clerk/astro'
import tailwindcss from '@tailwindcss/vite';
import { dark } from '@clerk/themes';
// En caso de querer que en español los componentes de Clerk:
// import { esES } from '@clerk/localizations';
// Y en integrations, debajo de appearance, agregar:
// localization: {
//   locale: esES
// }

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [clerk({ 
    appearance: {
      baseTheme: dark
    }
  })],
  adapter: node({ mode: 'standalone' }),
  output: 'server',
});