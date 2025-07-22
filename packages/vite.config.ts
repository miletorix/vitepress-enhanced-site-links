import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'EnhancedSiteLinks',
      fileName: (format) => `enhanced-site-links.${format}.js`,
      formats: ['es', 'umd']
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue', 'vitepress'],
      output: {
        globals: {
          exports: 'named',
          vue: 'Vue',
          vitepress: 'vitepress'
        }
      }
    }
  }
})
