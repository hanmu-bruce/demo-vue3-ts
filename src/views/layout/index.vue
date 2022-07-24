<template>
  <div class="flex h-full">
    <Menu :data="data" :defaultActiveIndex="activeIndex" class="w-270px" />
    <div class="flex-1">
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>
<script setup lang="tsx">
import Menu from '@/components/menu/index';
import permission from '@/store/permission';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getMenus } from '@/api/login';
import { getAssetsFile } from '@/utils/basic';
const route = useRoute();
const router = useRouter();
const permissionStore = permission();
const data = computed(() => permissionStore.menus);
const activeIndex = computed(() => route.name.toString());
</script>
<style lang="less" scoped></style>
