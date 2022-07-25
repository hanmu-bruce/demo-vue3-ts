<template>
  <div class="bg-white p-10px border-1px">
    <el-tag
      @click="clickTag(item.name)"
      v-for="(item, index) in tags"
      :key="index"
      class="tag"
      :closable="item.name != 'overview'"
      :effect="item.name == $route.name ? 'dark' : 'plain'"
      size="large"
    >
      <span class="mx-10px">{{ item.title }}</span>
    </el-tag>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import tagView from '@/store/tagList';
import { computed } from 'vue';
const router = useRouter();
const tagViewStore = tagView();
const tags = computed(() => tagViewStore.tags);
const clickTag = (name: string) => {
  router.push({ name });
};
</script>
<style lang="less" scoped>
.tag {
  margin-right: 10px;
  font-size: 10px;
  padding: 10px 10px;
  cursor: pointer;
}
</style>
