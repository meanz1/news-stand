<template>
  <div class="container">
    <div class="content-menu">
      <div class="content-title">
        <h3>전체 언론사</h3>
        <h3>내가 구독한 언론사</h3>
      </div>
      <div class="content-icon">
        <el-icon style="font-size: 25px"><List /></el-icon>
        <el-icon style="font-size: 25px"><Grid /></el-icon>
      </div>
    </div>
    <div class="content-src">
      <el-icon class="left-arrow-icon"><ArrowLeft /></el-icon>
      <div v-for="n in 24" :key="n" class="content-item"></div>
      <el-icon class="right-arrow-icon"><ArrowRight /></el-icon>
    </div>
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

.content-src {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  padding-top: 20px;
  position: relative;
}

.content-item {
  border: 1px solid rgb(211, 211, 211);
  height: 100px;
}

.left-arrow-icon {
  position: absolute;
  left: -100px;
  top: 50%;
  font-size: 30px;
}

.right-arrow-icon {
  position: absolute;
  right: -100px;
  top: 50%;
  font-size: 30px;
}
</style>
