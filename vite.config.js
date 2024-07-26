import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      // sassVariables: '/loco/src/quasar-varibles.sass', // 如果有自定义 SASS 变量
      cssAddon: true // 确保这里也启用了 cssAddon
    })
  ]
})
