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
      <el-icon v-if="currentPage !== 1" class="left-arrow-icon" @click="prevPage"
        ><ArrowLeft
      /></el-icon>
      <GridContent v-if="isGridView" />
      <ListContent v-else />

      <el-icon v-if="currentPage !== maxPage" class="right-arrow-icon" @click="nextPage"
        ><ArrowRight
      /></el-icon>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

import GridContent from './GridContent.vue'
import ListContent from './ListContent.vue'
const store = useStore()

const isGridView = ref(store.state.content.isGridView)

const currentPage = computed(() => store.state.user.currentPage)
const maxPage = 4

const changeViewState = (message) => {
  store.dispatch('setViewState', message === 'grid' ? true : false)
}

const changePressState = (message) => {
  store.dispatch('setPressState', message === 'all' ? true : false)
}

const prevPage = () => {
  store.dispatch('setCurrentPage', currentPage.value - 1)
}

const nextPage = () => {
  store.dispatch('setCurrentPage', currentPage.value + 1)
}
</script>

<style scoped lang="scss">
.container {
  padding: 20px 0;
}

.content-menu {
  @include flex-between;
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
</style>
