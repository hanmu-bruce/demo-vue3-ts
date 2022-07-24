<template>
  <div>
    <el-form
      :model="formData"
      ref="form"
      label-width="80px"
      :inline="false"
      size="normal"
    >
      <el-form-item label="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="startTime">
        <el-date-picker
          v-model="formData.startTime"
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

const formData = reactive({
  name: '',
  startTime: '',
});

const onSubmit = () => {
  return {};
};
</script>
<style lang="less" scoped></style>
