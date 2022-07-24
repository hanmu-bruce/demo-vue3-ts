import asyncRoutes from '@/router/route.async';
import commonRoutes from '@/router/route.common';
import { defineStore } from 'pinia';
import { RouteRecordRaw } from 'vue-router';
export default defineStore({
  id: 'permission',
  state: () => {
    return {
      // 异步路由
      permissionRoutes: [] as Array<RouteRecordRaw>,
      menus: [],
    };
  },
  persist: true,
  actions: {
    addRoutes(menus: any) {
      this.permissionRoutes = generateRoutes(menus, asyncRoutes);
    },
    setMenus(menus) {
      this.menus = menus;
    },
  },
});
function generateRoutes(menus, routes) {
  const result = [];
  routes.forEach((item) => {
    if (
      (item?.children?.length == 1 || !item.children) &&
      hasPermission(item, menus)
    ) {
      result.push(item);
    } else if (item.children.length > 1) {
      item.children = generateRoutes(menus, item.children);
      if (item.children.length > 1) {
        result.push(item);
      }
    }
  });
  return result;
}
function hasPermission(route: RouteRecordRaw | any, menus: Array<any>) {
  let result = false;
  menus.forEach((menu) => {
    // menu肯定有children属性，但是可能为空
    // 如果为叶节点
    if (menu.name == route.name && menu.children.length == 0) {
      result = true;
      return result;
    }
    // 非叶节点
    if (menu.children.length) {
      result = true;
      return result;
    }
  });
  return result;
}
