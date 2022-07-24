// 不需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';
import Layout from '@/views/layout/index.vue';
const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: '/form',
    component: Layout,
    meta: { hidden: true },
    children: [
      { path: 'index', component: () => import('@/views/form/index.vue') },
    ],
  },
];

export default commonRoutes;
