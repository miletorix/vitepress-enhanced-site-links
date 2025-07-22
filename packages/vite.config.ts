import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'EnhancedSiteLinks',
      formats: ['es', 'umd'],
      fileName: (format) => `enhanced-site-links.${format}.js`
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          exports: 'named',
          vue: 'Vue',
        }
      }
    }
  }
})
