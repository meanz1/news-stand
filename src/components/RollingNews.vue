<template>
  <div class="rolling-container">
    <RollingEachNews />
    <RollingEachNews />
  </div>
</template>

<script setup>
import RollingEachNews from './RollingEachNews.vue'
</script>

<style scoped lang="scss">
.rolling-container {
  @include flex-center;
  gap: 20px;
  padding: 20px 0;
}
</style>
