import asyncRoutes from '@/router/route.async';
import commonRoutes from '@/router/route.common';
import { defineStore } from 'pinia';

export default defineStore({
  id: 'permission',
  state: () => {
    return {
      menus: [
        {
          name: 'overview',
          title: 'overview',
          children: [],
        },
        {
          name: 'roleManagement',
          title: 'roleManagement',
          children: [
            {
              name: 'roleAdd',
              title: 'roleAdd',
              children: [],
            },
            {
              name: 'roleDelete',
              title: 'roleDelete',
              children: [],
            },
          ],
        },
      ],
    };
  },
});
