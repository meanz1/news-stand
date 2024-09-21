<template>
  <div class="header">
    <h1>
      <el-icon @click="refreshPage"><Document /></el-icon>
      <span>뉴스스탠드</span>
    </h1>
    <DateUtil locale="ko" />
  </div>
</template>

<script setup>
import DateUtil from '@/utils/DateUtil.vue'

const refreshPage = () => {
  window.location.reload()
}
</script>

<style scoped lang="scss">
.header {
  @include flex-between;
  padding: 20px 0;
}
.header h1 {
  display: flex;
  align-items: center;
  gap: 10px;
}

.el-icon {
  cursor: pointer;
}
</style>
