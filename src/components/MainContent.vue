<template>
  <div class="container">
    <div class="content-menu">
      <div class="content-title">
        <h3
          style="cursor: pointer"
          :style="{ fontWeight: isAllPress ? 'bold' : 'normal' }"
          @click="changePressState('all')"
        >
          전체 언론사
        </h3>
        <h3
          style="cursor: pointer"
          :style="{ fontWeight: !isAllPress ? 'bold' : 'normal' }"
          @click="changePressState('mine')"
        >
          내가 구독한 언론사
        </h3>
      </div>
      <div class="content-icon">
        <el-icon
          style="font-size: 25px"
          :style="{ color: isGridView ? 'black' : 'rgb(64, 158, 255)' }"
          @click="changeViewState('list')"
          ><List
        /></el-icon>
        <el-icon
          style="font-size: 25px"
          :style="{ color: !isGridView ? 'black' : 'rgb(64, 158, 255)' }"
          @click="changeViewState('grid')"
          ><Grid
        /></el-icon>
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
import { computed } from 'vue'

import GridContent from './GridContent.vue'
import ListContent from './ListContent.vue'
const store = useStore()

const isGridView = computed(() => store.state.content.isGridView)
const isAllPress = computed(() => store.state.content.isAllPress)
const currentPage = computed(() => store.state.user.currentPage)
const maxPage = 4

const changeViewState = (message) => {
  store.dispatch('setViewState', message === 'grid' ? true : false)
  store.dispatch('setCurrentPage', 1)
}

const changePressState = (message) => {
  store.dispatch('setPressState', message === 'all' ? true : false)
  store.dispatch('setCurrentPage', 1)
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
