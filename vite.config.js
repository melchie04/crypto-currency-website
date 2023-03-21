import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createProxyMiddleware } from 'http-proxy-middleware';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/crypto-website",
  plugins: [react()],
  server: {
    middleware: [
      createProxyMiddleware('/api', {
        target: 'https://api.coingecko.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      }),
    ],
  },
})