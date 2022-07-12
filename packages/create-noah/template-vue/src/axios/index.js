/**
 * axios二次封装
 */

 import axios from 'axios';
 import router from '@/router';
 import { ERR_MESSAGE, PREFIX_APPID, BASE_API } from '@/utils/CONSTANTS';
 import { axiosConfig } from './config';
 import { errorCodeHandler } from './errCode';
 import EnvConfig from '@/config';
 
 // 创建 axios 实例对象 添加全局配置
 const service = axios.create(axiosConfig);
 
 // 创建一个list 储存pending的请求
 let pendingList = [];
 
 // 请求拦截
 service.interceptors.request.use((req) => {
   const { headers } = req;
   const token = window.localStorage.getItem('token') || 'abc';
   headers['authorization'] = token || '';
   console.log(req);
 
   removePending(req, { isCancel: true });
   req.cancelToken = new axios.CancelToken((c) => {
     pendingList.push({
       url: `${req.url}/${JSON.stringify(req.data)}&request_type=${req.method}`,
       cancel: c
     });
   });
 
   return req;
 });
 
 // 响应拦截
 service.interceptors.response.use(async (res) => {
   if (res.status === 200) {
     const { success, code, msg, message, data } = res.data;
     const errMsg = msg || message;
     if (success) {
       if (res.config?.allData) return res.data; // 如果请求添加了allData参数 则返回所有response exp: success为true需要提示msg
       return data;
     } else {
       return errorCodeHandler(code, errMsg);
     }
   } else {
     if (res.status === 500) {
       ElMessage.error(SERVICE_ERROR);
       return Promise.reject(SERVICE_ERROR);
     }
     return res;
   }
 });
 
 const request = (options) => {
   const { method = 'get', headers, url, prefix = '' } = options;
 
   // 获取环境变量
   const env = import.meta.env.MODE || 'prod';
 
   // 判断
   if (prefix) {
     options.url = `${BASE_API}${options.prefix}${url}`;
     const appId = PREFIX_APPID[options.prefix];
     // 兼容URL带前缀的写法
     if (options.mock && env === 'mock') {
       // mock数据
       if (appId) {
         options.url = `${EnvConfig[env]}/${appId}${url}`;
       } else {
         console.warn('prefix or appId was not found');
       }
     } else {
       // 非 mock 数据
       options.url = `${EnvConfig[env] || ''}${BASE_API}${url}`;
     }
     console.log(options.url);
   }
   if (method.toLowerCase() === 'get' || method.toLowerCase() === 'delete') {
     options.params = options.data;
   }
 
   if (method.toLowerCase() === 'post' || method.toLowerCase() === 'put') {
     if (headers['Content-Type'].includes('application/json')) {
       options.data = JSON.stringify(options.data);
     } else {
       options.data = qs.stringify(options.data);
     }
   }
   return service(options);
 };
 
 ['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
   request[item] = (url, data, options) => {
     return request({
       url,
       data,
       method: item,
       ...options
     });
   };
 });
 
 // 取消请求方法
 const removePending = (config, { isCancel = false } = {}) => {
   for (const p in pendingList) {
     const item = p;
     const list = pendingList[p];
 
     if (list.url === `${config.url}/${JSON.stringify(config.data)}&request_type=${config.method}`) {
       if (isCancel) {
         console.warn(config.url + 'is canceled');
         list.cancel(config.url);
       }
       pendingList.splice(item, 1);
     }
   }
 };
 
 export default request;
 