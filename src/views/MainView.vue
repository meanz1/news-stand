<template>
  <div class="switch-container">
    <el-switch
      v-model="isDarkMode"
      class="ml-2"
      :active-action-icon="Moon"
      active-text="Dark mode"
      :inactive-action-icon="Sunny"
      inactive-text="Light mode"
    />
  </div>
  <MainHeader />
  <RollingNews />
  <MainContent />
</template>

<script setup>
import MainHeader from '../components/MainHeader.vue'
import RollingNews from '../components/RollingNews.vue'
import MainContent from '../components/MainContent.vue'
import { Sunny, Moon } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const isDarkMode = computed({
  get: () => store.state.user.isDarkMode,
  set: (value) => {
    store.dispatch('setUserMode', value)
  }
})
</script>
<style lang="scss" scoped>
.switch-container {
  position: relative;
}

.ml-2 {
  --el-switch-on-color: #409eff;
  --el-switch-off-color: #409eff;
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
