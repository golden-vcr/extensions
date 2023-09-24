import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: {
        app: './video_overlay.html',
      },
    },
  },
  server: {
    port: 8080,
    strictPort: true,
    https: {
      key: fs.readFileSync('./ssl/key.pem'),
      cert: fs.readFileSync('./ssl/cert.pem'),
    },
    proxy: {
      '/api': {
        target: 'https://goldenvcr.com',
        changeOrigin: true,
      },
    },
  },
})
