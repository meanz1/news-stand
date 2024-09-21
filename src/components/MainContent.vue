<template>
  <div class="container">
    <div class="content-menu">
      <div class="content-title">
        <h3>전체 언론사</h3>
        <h3>내가 구독한 언론사</h3>
      </div>
      <div class="content-icon">
        <el-icon><List /></el-icon>
        <el-icon><Grid /></el-icon>
      </div>
    </div>
    <div class="content-src"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  padding: 20px 0;
}

.content-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content-title {
  display: flex;
  gap: 20px;
  align-items: center;
  h3 {
    cursor: pointer;
  }
}

.content-icon {
  display: flex;
  gap: 10px;
}

.el-icon {
  cursor: pointer;
}
</style>
