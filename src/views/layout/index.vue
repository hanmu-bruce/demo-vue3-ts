<template>
  <div class="flex h-full">
    <Menu :data="data" :defaultActiveIndex="activeIndex" class="w-270px" />
    <div class="flex-1">
      <TagView />
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>
<script setup lang="tsx">
import Menu from './menu/index';
import permission from '@/store/permission';
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import TagView from './tagView/index.vue';
const route = useRoute();
const permissionStore = permission();
const data = computed(() => permissionStore.menus);
const activeIndex = computed(() => route.name.toString());
</script>
<style lang="less" scoped></style>
