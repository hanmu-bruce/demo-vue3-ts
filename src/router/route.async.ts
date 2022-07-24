// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';
import Layout from '@/views/layout/index.vue';
const overview = 'overview/index';
const asyncRoutes: Array<RouteRecordRaw> = [
  {
    name: 'overviewManagement',
    path: '/overview',
    component: Layout,
    redirect: '/overview/index',

    children: [
      {
        path: 'index',
        name: 'overview',
        component: () => import('@/views/overview/index.vue'),
      },
    ],
  },
  {
    name: 'roleManagement',
    path: '/roleManagement',
    component: Layout,

    redirect: '/roleManagement/roleAdd',
    children: [
      {
        path: 'roleAdd',
        name: 'roleAdd',
        component: () => import('@/views/role/add.vue'),
      },
      {
        path: 'roleDelete',
        name: 'roleDelete',
        component: () => import('@/views/overview/index.vue'),
      },
      // 这个本来不该有
      {
        path: 'roleDelete',
        name: 'roleMod',
        component: () => import('@/views/overview/index.vue'),
      },
    ],
  },
];

export default asyncRoutes;
