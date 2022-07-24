// 不需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';
import Layout from '@/views/layout/index.vue';
const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: '',
    meta: { hidden: true },
    component: () => import('@/views/login/index.vue'),
  },
];

export default commonRoutes;
