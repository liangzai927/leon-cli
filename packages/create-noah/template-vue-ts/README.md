<div align="center">
    <h1>noah template</h1>
    <p>vite + vue3 + ts 开箱即用开发模板</p>
</div>

<br />
<br />

## 特点 🐳

1. Vite 的
2. Vue3 的
3. Mock 支持
4. Api 自动引入
5. 组件自动引入
6. TypeScript 的
7. pinia 状态管理
8. pnpm 包管理器
9. scss
10. 跳转进度条支持
11. 路径别名 `@` 支持
12. gzip 资源压缩支持
13. 环境变量配置支持
14. 统一的代码规范与风格支持
15. changelog
16. axios
17. http 请求自动引入
18. noah-utils

<br />
<br />

## `node` 版本推荐 🐎

因为该模板完全面向现代，所以推荐大家使用 `node` 当前的长期维护版本 `v16`， 最好使用 `v16.14.2` 。

<br />
<br />
<br />

## 使用 🐂

> 该模板不限定大家使用某一特定的包管理器，npm，yarn 和 pnpm 都行。同时注意 npm 的版本应该尽量的新。

强烈推荐大家使用更快更合理的 `pnpm` 包管理器 👉 [安装教程](https://pnpm.io/zh/installation)

1. 安装依赖

```shell
pnpm install

# 或者 npm install
# 或者 yarn

```

2. 开发

```shell
pnpm dev

# 或者 npm run dev
# 或者 yarn dev

# 开启 mock模式
pnpm mock

# 或者 npm run mock
# 或者 yarn mock
```

3. 生产

```shell
pnpm prod

# 或者 npm run prod
# 或者 yarn prod

```

4. 打包

```shell
pnpm build

# 或者 npm run build
# 或者 yarn build
```

5. 代码规范校验

```shell
# 校验style
pnpm lint:style

# 或者 npm run lint:style
# 或者 yarn lint:style

# 校验js
pnpm lint:script

# 或者 npm run lint:script
# 或者 yarn lint:script

# 校验所有
pnpm lint

# 或者 npm run lint
# 或者 yarn lint
```

6. 依赖更新

```shell
pnpm clean-install

# 或者 npm run clean-install
# 或者 yarn clean-install
```

7. git commit

```shell
pnpm commit

# 或者 npm run commit
# 或者 yarn commit
```

8. 发布

```shell
pnpm release

# 或者 npm run release
# 或者 yarn release
```

<br />
<br />

## 动机 🐗

为什么要做这个 **模板** 呢？

1. 为下次开发节省浪费在配置上的时间
2. 结合主流插件整合现代开发架构，提高开发效率

<br />
<br />

## 使用场景 🐻

什么时候你应该用?

1. 不想浪费时间在项目配置上
2. 希望尝试用更现代的方式开发 `web` 应用，提高开发效率

<br />
<br />

## 详情 🐳

### [1. Vite 的](https://cn.vitejs.dev/)

该模板采用 **[vite](https://cn.vitejs.dev/)** 作为构建工具，你可以在根目录下的 `vite.config.ts` 对项目的构建进行配置。

对于众多主流插件的引入和繁杂配置已经整合到根目录下的预设 `presets` 中，大多数情况下你是不需要重新对它们进行配置的。

<br />

### [2. Vue3 的](https://v3.cn.vuejs.org/)

<br />

### [3. Mock 支持](https://github.com/vbenjs/vite-plugin-mock)

前后端 mock 数据统一在[yapi](http://yapi.dev-10-94-168-15.nip.io/)上操作

```ts
export const api = (data) => {
  return request({
    url: '/test',
    data,
    prefix: '/chain-query',
    mock: true
  });
};
```

<br />

### [4. Api 自动引入](https://github.com/antfu/unplugin-auto-import)

原本 `vue` 的 `api` 需要自行 `import`。

```ts
import { ref, computed } from 'vue';
const count = ref(0);
const doubled = computed(() => count.value * 2);
```

现在可以直接使用。

```ts
const count = ref(0);
const doubled = computed(() => count.value * 2);
```

而且上边的 `api` 是按需自动引入的。

目前模板支持自动引入 `api` 的库列表包括:

1. vue
2. pinia
3. vue-router

具体可见 👉 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)。

<br />

### [5. 组件自动引入](https://github.com/antfu/unplugin-auto-import)

原来需要 `import`

```html
<!-- src/views/login.vue -->
<script setup lang="ts">
  import Hello from '../components/Hello.vue';
</script>

<template>
  <Hello />
</template>
```

现在只要在 `src/components` 下定义的组件都将会按需引入，即 `import` 是不需要的。

```html
<!-- src/views/login.vue -->
<template>
  <Hello />
</template>
```

同时流行组件库自动引入也是支持的，例如 `Element plus`。

只需安装依赖。

```shell
pnpm add element-plus

# 或者 npm i element-plus
# 或者 yarn add element-plus
```

即可在模板中使用。

```html
<!-- src/views/login.vue -->
<template>
  <el-button type="success">Success</el-button>
</template>
```

目前支持的组件库有:

[vant](https://github.com/youzan/vant)
[idux](https://github.com/IDuxFE/idux)
[devui](https://github.com/DevCloudFE/vue-devui)
[quasar](https://github.com/quasarframework/quasar)
[varlet](https://github.com/varletjs/varlet)
[inkline](https://github.com/inkline/inkline)
[vuetify](https://github.com/vuetifyjs/vuetify)
[naive-ui](https://github.com/TuSimple/naive-ui)
[primevue](https://github.com/primefaces/primevue)
[layui-vue](https://gitee.com/layui/layui-vue)
[view-design](https://iviewui.com/)
[arco-design](https://github.com/arco-design/arco-design)
[element-plus](https://github.com/element-plus/element-plus)
[ant-design-vue](https://github.com/vueComponent/ant-design-vue)
[@headlessui/vue](https://github.com/tailwindlabs/headlessui)
[tdesign-vue-next](https://github.com/Tencent/tdesign-vue-next)
[@vueuse/components](https://github.com/vueuse/vueuse/tree/main/packages/components)

具体可见 👉 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)

<br />

### [6. TypeScript 的](https://www.tslang.cn/)

不需要重新配置，直接用 `ts` 书写就行了。

<br />

### [7. pinia 状态管理](https://pinia.vuejs.org/)

`pinia` 是下一代的状态管理库，比 `vuex` 更简单，`ts` 支持更好。

你可以在 `src/store` 中进行状态的定义。

例如创建 `src/store/counter.ts` 👇

```ts
// src/store/counter.ts
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 };
  },
  actions: {
    inc() {
      this.count++;
    }
  }
});
```

定义完后在 `setup` 中直接使用即可

```html
<!-- src/views/login.vue -->
<script setup lang="ts">
    import { useCounterStore } from "../stores/counter"
    const Counter = useCounterStore()
<script>

<template>
    <div @click="Counter.inc">{{Counter.count}}</div>
</template>
```

更多具体使用可见 👉 [pinia](https://pinia.vuejs.org/)

<br />

### [8. pnpm 包管理器](https://pnpm.io/zh/)

`pnpm` 是非常优秀的包管理器，更快、更节省空间、更合理。

具体可见 👉 [pnpm](https://pnpm.io/zh/)

<br />

### [9. scss](https://www.sass.hk/docs/)

css 预处理工具。

具体可见 👉 [scss](https://www.sass.hk/docs/)

<br />

### [10. 跳转进度条支持](https://github.com/rstacruz/nprogress)

跳转进度条由 `nprogress` 实现，可在`src/styles/main.css` 中调整配色。

```scss
/** src/styles/index.scss **/

/** 省略其他样式 **/
#nprogress {
  .bar {
    background: #05cd99 !important;
  }
}
```

具体可见 👉 [nprogress](https://github.com/rstacruz/nprogress)

<br />

### 11. 路径别名 `@` 支持

`@` 路径将被导向项目的 `src` 目录。

```html
<!-- src/views/login.vue -->
<script lang="ts" setup>
  import { PREFIX_APPID } from '@/utils/CONSTANT';

  // 等价于
  // import { PREFIX_APPID } from "../src/utils/CONSTANT"
</script>
```

<br />
<br />

### 12. [`gzip` 资源压缩支持](https://github.com/vbenjs/vite-plugin-compression)

生产环境下开箱即用的 `gzip` 资源压缩，无需配置。

具体可见 👉 [vite-plugin-compression](https://github.com/vbenjs/vite-plugin-compression)

<br />
<br />

### 13. [环境变量配置支持](https://cn.vitejs.dev/guide/env-and-mode.html)

根目录下有四个环境变量配置文件 `.env`，`.env.dev`，`.env.mock` 和 `.env.prod` 用来对项目进行配置。

<br />
<br />

### 14. 统一的代码规范与风格支持

由 [eslint](https://github.com/eslint/eslint) 提供的代码规范校验，使用 [prettier](https://github.com/prettier/prettier) 统一代码风格。

由 [husky](https://github.com/typicode/husky) + [lint-staged](https://github.com/okonet/lint-staged) 提供的 `commit` 时校验。

<br />
<br />

### 15. [changelog](https://github.com/release-it/release-it)

发布版本根据 tag 自动生成 changelog。

具体可见 👉 [release-it](https://github.com/release-it/release-it)

<br />
<br />

### 16. [axios](http://www.axios-js.com/zh-cn/docs/)

基于`axios`库增加了业务通用二次封装

1. 网络请求通用错误处理
2. 取消重复发送同一请求

具体可见 👉 [axios](http://www.axios-js.com/zh-cn/docs/)

<br />
<br />

### 17. http 请求自动引入

`http`请求统一在`src/api/modules`下新建，以业务模块名命名，由`src/api/index.ts`自动引入

```html
<!-- src/views/login.vue -->
<script lang="ts" setup>
  const globalProperties = ctx.appContext.config.globalProperties;
  globalProperties.$api.modulesA.getHttp();
</script>
```

<br />
<br />

### 18. [noah-utils](http://npm.bitmartpro.com/-/web/detail/@noah/utils-test)

noah 团队的 utils 工具库

1. 集成了 lodash, dayjs 功能
2. 通用的正则匹配函数及规则校验

```html
<!-- src/views/login.vue -->
<script setup lang="ts">
  import { checkRules, _, dayjs } from '@noah/utils-test/lib/noah-utils.esm';
  _.max([1, 2]);
</script>
```

<br />
<br />
