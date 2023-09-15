import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    port: 8080,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'https://goldenvcr.com',
        changeOrigin: true,
      },
    },
  },
})
