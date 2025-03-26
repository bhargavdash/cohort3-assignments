import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      '74f6-2409-40f2-15c-79d0-88cd-5913-37f5-656d.ngrok-free.app'
    ],
  },
  plugins: [react(), tailwindcss()],
})
