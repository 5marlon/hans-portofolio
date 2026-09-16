import { defineConfig } from 'vite'

export default defineConfig({
  // Serve from the root of the project
  root: '.',
  base: '/hans-portofolio/', // GitHub Pages base path
  server: {
    port: 5173,
    open: true, // auto-open browser on npm run dev
  },
  build: {
    outDir: 'dist',
  },
})
