import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    '/api': {
      target: 'https://newsapi.org/v2',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
      headers: {
        'X-Api-Key': import.meta.env.VITE_NEWS_API, 
      },
    },
  },
})
