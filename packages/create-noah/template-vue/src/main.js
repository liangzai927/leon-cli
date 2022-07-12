import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import request from './axios';
import api from './api';
import store from './store';

// 创建 Vue 实例对象
const app = createApp(App);

// 挂载全局对象
app.config.globalProperties.$request = request;
app.config.globalProperties.$api = api;

//添加路由
app.use(router);

//添加 pinia
app.use(store);

// 初始化
app.mount('#app');
