// 跟鉴权无关的特殊路由
import { RouteRecordRaw } from 'vue-router';

const exceptionRoutes: Array<RouteRecordRaw> = [
  {
    path: '/401',
    name: '401',
    meta: {
      title: '需要登录',
      hidden: true,
    },
    component: () => import('@/views/exception/401.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '非常抱歉,页面走丢了',
      hidden: true,
    },
    component: () => import('@/views/exception/404.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    meta: {
      hidden: true,
    },
    redirect: '/404',
  },
];

export default exceptionRoutes;
