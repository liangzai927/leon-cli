import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import request from './axios';
import api from './api';
// import { checkRules } from '@noah/utils-test/lib/noah-utils.esm';

// 导入样式
import './assets/styles/index.scss';

// 导入构造函数
import { createPinia } from 'pinia';

// 创建Vue应用实例app
const app = createApp(App);

// 实例化 Pinia
const pinia = createPinia();

// 应用以插件形式挂载Pinia实例
app.use(pinia);
// 挂载全局对象
app.config.globalProperties.$request = request;
app.config.globalProperties.$api = api;

// 路由
app.use(router);

app.mount('#app');
