import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ['src/components', 'src/pages'],
    }),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      // global imports to register
      imports: [
        // presets
        'vue',
        'vue-router',
        'vue-i18n',
        // custom
        {
          '@vueuse/core': [
            'useMouse', // import { useMouse } from '@vueuse/core',
            ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
          ],
          'axios': [
            ['default', 'axios'], // import { default as axios } from 'axios',
          ],
          'lodash': [
            ['default', '_'],
          ],
        },
      ],
      // Auto import for module exports under directories
      // by default it only scan one level of modules under the directory
      dirs: [
        // './hooks',
        // './composables' // only root modules
        // './composables/**', // all nested modules
        // ...
      ],
      vueTemplate: true,
    }),
    UnoCSS(),
    Pages(),
  ],
})
