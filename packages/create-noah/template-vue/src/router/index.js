import { createRouter, createWebHistory } from 'vue-router';
// import allAuthRoutes from './authRouter';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const routes = [
  {
    path: '/test',
    name: 'test',
    component: () => import('@views/Test.vue'),
    meta: {
      title: '测试路由'
    }
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
