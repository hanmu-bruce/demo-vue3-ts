<template>
  <div>login</div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { getMenus } from '@/api/login';
import permission from '@/store/permission';
import { useRouter } from 'vue-router';
const permissionStore = permission();
const router = useRouter();
onMounted(async () => {
  const menus = await getMenus();
  permissionStore.setMenus(menus);
  // 过滤路由
  await permissionStore.addRoutes(menus);
  router.push({ name: 'overview' });
});
</script>
<style lang="less" scoped></style>
