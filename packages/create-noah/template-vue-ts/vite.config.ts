import { defineConfig, loadEnv } from 'vite';
import plugins from './presets/plugins';
const path = require('path');

export default defineConfig(({ mode }) => {
  // 获取.env文件里定义的环境变量
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [plugins()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      },
      extensions: ['.ts', '.js']
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          // 生产环境时移除console
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    server: {
      port: 8080,
      proxy: {
        '/api': {
          target: env.VITE_BASE_URL_TARGET,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, '')
        },
        '/mock': {
          // yapi地址
          target: env.VITE_BASE_MOCK,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/mock/, '')
        }
      },
      open: true
    }
  };
});
