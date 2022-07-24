<template>
  <div class="flex h-full">
    <Menu :data="data" :defaultActiveIndex="activeIndex" class="w-200px" />
    <div class="flex-1">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang="tsx">
import Menu from '@/components/menu/index';
import permission from '@/store/permission';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const permissionStore = permission();
const data = permissionStore.menus;
const activeIndex = computed(() => route.name?.toString());
</script>
<style lang="less" scoped>
// :deep(.el-menu) {
//   width: 200px;
//   display: inline-block;
//   height: 100%;
// }
</style>
