<template>
  <div class="rolling-container">
    <RollingEachNews />
    <RollingEachNews />
  </div>
</template>

<script setup>
import RollingEachNews from './RollingEachNews.vue'
</script>

<style scoped>
.rolling-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
}
</style>
