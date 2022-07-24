// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';
import Layout from '@/views/layout/index.vue';
const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '',
      icon: '',
      hidden: true,
    },
    component: () => import('@/App.vue'),
  },
  {
    name: 'overview',
    path: '/overview',
    component: Layout,
    redirect: '/overview/index',
    meta: {
      title: 'overview',
    },
    children: [
      {
        path: 'index',
        name: 'overviewIndex',
        component: () => import('@/views/overview/index.vue'),
      },
    ],
  },
  {
    meta: {
      title: 'roleManagement',
    },
    name: 'roleManagement',
    path: '/roleManagement',
    component: Layout,
    redirect: '/roleManagement/roleAdd',
    children: [
      {
        meta: {
          title: 'roleAdd',
        },
        path: 'roleAdd',
        name: 'roleAdd',
        children: [],
        component: () => import('@/views/overview/index.vue'),
      },
      {
        meta: {
          title: 'roleDelete',
        },
        path: 'roleDelete',
        name: 'roleDelete',
        children: [],
        component: () => import('@/views/overview/index.vue'),
      },
    ],
  },
];

export default asyncRoutes;
