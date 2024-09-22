<template>
  <div class="grid-container">
    <div v-for="(elem, index) in paginatedNews" :key="index" class="grid-item">
      <img :src="isDarkMode ? elem.darkSrc : elem.lightSrc" class="grid-item-logo" />
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

const itemsPerPage = 24

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return newsList.slice(start, end)
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
