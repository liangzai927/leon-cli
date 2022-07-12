// 引入仓库定义函数
import { defineStore } from 'pinia';

// 配置 state getters actions
export const mainStore = defineStore('main', {
  // state 类似组件的data选项，函数形式返回对象
  state: () => {
    return {
      msg: 'hello world!',
      counter: 0
    };
  },
  getters: {},
  actions: {}
});
