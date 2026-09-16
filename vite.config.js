import { defineConfig } from 'vite'

export default defineConfig({
  // Serve from the root of the project
  root: '.',
  server: {
    port: 5173,
    open: true, // auto-open browser on npm run dev
  },
  build: {
    outDir: 'dist',
  },
})
