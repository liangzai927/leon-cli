import { resolve } from 'path';

import vue from '@vitejs/plugin-vue';
// import {
//   ElementPlusResolver,
// } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import viteCompression from 'vite-plugin-compression';

export default () => {
  return [
    vue(),
    // 自动引入自定义业务组件/组件库
    Components({
      dts: resolve(__dirname, './types/components.d.ts')
      // resolvers: [
      //   ElementPlusResolver()
      // ],
    }),
    // 自动引入hooks/routers/pinia
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      // dirs: ['src/store'],
      dts: './presets/types/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json'
      }
    }),
    // 生产环境gzip压缩
    viteCompression()
  ];
};
