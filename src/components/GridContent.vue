<template>
  <div v-if="isAllPress" class="grid-container">
    <div v-for="(elem, index) in paginatedNews" :key="index" class="grid-item">
      <img :src="isDarkMode ? elem.darkSrc : elem.lightSrc" class="grid-item-logo" />
    </div>
  </div>
  <div v-else class="grid-container">
    <div v-for="(elem, index) in isSubpaginatedNews" :key="index" class="grid-item">
      <img v-if="elem" :src="isDarkMode ? elem.darkSrc : elem.lightSrc" class="grid-item-logo" />
      <div v-else class="grid-item-logo" />
    </div>
  </div>
</template>

<script setup>
import newsList from '@/assets/data/newsList.json'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const isDarkMode = computed(() => store.state.user.isDarkMode)
const currentPage = computed(() => store.state.user.currentPage)
const isAllPress = computed(() => store.state.content.isAllPress)
const itemsPerPage = 24

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  const allNews = newsList.slice(start, end)

  // 24개 칸을 채우기 위한 빈 요소 추가
  return [...allNews, ...Array(Math.max(0, itemsPerPage - allNews.length)).fill(null)]
})

const isSubpaginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  const subList = newsList.filter((elem) => elem.isSub).slice(start, end)

  // 24개 칸을 채우기 위한 빈 요소 추가
  return [...subList, ...Array(Math.max(0, itemsPerPage - subList.length)).fill(null)]
})
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
}

.grid-item {
  @include flex-center;
  border: 1px solid $border-grey;
  height: 100px;
  cursor: pointer;
  &:hover {
    background-color: $border-grey;
  }
}

.grid-item-logo {
  width: 80px;
  height: 40px;
}
</style>
