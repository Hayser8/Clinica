// astro.config.mjs
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression'

export default defineConfig({
  site: 'https://www.deltascan.gt',   // dominio canónico
  trailingSlash: 'never',             // URLs sin "/" final
  output: 'server',
  adapter: vercel({ edge: false }),
  integrations: [sitemap()],
  vite: {
    plugins: [
      tailwindcss(),
      compression({ algorithm: 'gzip', threshold: 1024 })
    ],
    build: { minify: 'esbuild' }
  }
})