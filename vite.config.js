import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Images are small (5-30 KB); inlining the logos keeps request count low
    // while the larger project figures stay as separate cacheable files.
    assetsInlineLimit: 8192,
  },
})
