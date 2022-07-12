// / <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly globEager: any;
}

interface ImportMetaEnv {
  // mock base url
  readonly VITE_MOCK_URL: string;
  // base url实际地址
  readonly VITE_BASE_URL_TARGET: string;
}

declare module 'qs';

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
