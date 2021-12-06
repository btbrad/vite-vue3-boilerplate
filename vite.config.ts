import { defineConfig } from 'vite'
const path = require('path')
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  resolve: {
    alias: {
      // 路径映射必须以/开头和结尾
      '/comps/': path.resolve(__dirname, 'src/components'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [
    vue(),
    viteMockServe({
      // close support .ts file
      supportTs: false,
    }),
  ],
})
