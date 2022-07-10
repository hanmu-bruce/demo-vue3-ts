<template>
  <el-menu mode="vertical" default-active="">
    <el-sub-menu
      v-for="(submenus, index) in menus"
      :index="index + 1"
      :key="submenus.key"
    >
      <template #title>{{ submenus.title }}</template>
      <el-menu-item
        v-for="(item, subIndex) in submenus.menus"
        :index="index + 1 + '-' + (subIndex + 1)"
        :key="item.key"
      >
        {{ item.title }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<script setup></script>
<style lang="less" scoped></style>
