import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import eslintPlugin from 'vite-plugin-eslint';
// 自动引入 vue 内部方法
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  resolve: {
    extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.node', '.scss'],
    alias: {
      '@': resolve('./src'),
      '@views': resolve('./src/views')
    }
  },
  base: '/', // 设置打包路径
  server: {
    host: '0.0.0.0', // 设置后同一个服务器下的设备可以通过访问Network中的ip来访问项目
    port: 9527, //自定义端口
    open: true, //设置服务启动时是否自动打开浏览器
    proxy: {
      //配置代理
    }
  },
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.ts'],
      exclude: ['./node_modules/**'],
      cache: false
    }),
    AutoImport({
      imports: ['vue', 'vue-router']
    })
  ],
  css: {
    postcss: {
      plugins: [
        {
          //避免出现:build时的 @charset 必须在第一行的警告
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            }
          }
        }
      ]
    },
    preprocessorOptions: {
      scss: {
        //全局配置样式
        additionalData: `@use "@/assets/style/index.scss" as *;`
      }
    }
  }
});
