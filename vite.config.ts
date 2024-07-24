import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueRouter({
      /* options */
      dts: 'src/typed-router.d.ts',
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        // 추가적으로 임포트할 라이브러리를 여기에 추가
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      resolvers: [VueUseComponentsResolver()],
    }),
  ],
})
