<template>
  <div class="container">
    <div class="content-menu">
      <div class="content-title">
        <h3 style="cursor: pointer" @click="changePressState('all')">전체 언론사</h3>
        <h3 style="cursor: pointer" @click="changePressState('mine')">내가 구독한 언론사</h3>
      </div>
      <div class="content-icon">
        <el-icon style="font-size: 25px" @click="changeViewState('list')"><List /></el-icon>
        <el-icon style="font-size: 25px" @click="changeViewState('grid')"><Grid /></el-icon>
      </div>
    </div>
    <div class="content-src">
      <el-icon class="left-arrow-icon"><ArrowLeft /></el-icon>
      <div v-if="isGridView" class="grid-container">
        <div v-for="n in 24" :key="n" class="grid-item"></div>
      </div>
      <div v-else class="list-container"></div>

      <el-icon class="right-arrow-icon"><ArrowRight /></el-icon>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref } from 'vue'
const store = useStore()

const isGridView = ref(store.state.content.isGridView)
const isAllPress = ref(store.state.content.isGridView)

const changeViewState = (message) => {
  isGridView.value = message === 'grid' ? true : false
}

const changePressState = (message) => {
  isAllPress.value = message === 'all' ? true : false
}
</script>

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

.content-src {
  padding-top: 20px;
  position: relative;
  height: 400px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
}

.grid-item {
  border: 1px solid rgb(211, 211, 211);
  height: 100px;
}

.list-container {
  border: 1px solid rgb(211, 211, 211);
  height: 100%;
}
</style>
