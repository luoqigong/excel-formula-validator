import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '', // GitHub Pages 需要
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html')
      }
    }
  },
  worker: {
    format: 'es' // Web Worker 格式
  }
})
