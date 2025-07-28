// astro.config.mjs
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
