<template>
  <el-switch
    v-model="isDarkMode"
    @change="handleSwitchMode"
    class="ml-2"
    style="
      --el-switch-on-color: #409eff;
      --el-switch-off-color: #409eff;
      display: flex;
      justify-content: end;
    "
    :active-action-icon="Moon"
    active-text="Dark mode"
    :inactive-action-icon="Sunny"
    inactive-text="Light mode"
  />
  <MainHeader />
  <RollingNews />
  <MainContent />
</template>

<script setup>
import MainHeader from '../components/MainHeader.vue'
import RollingNews from '../components/RollingNews.vue'
import MainContent from '../components/MainContent.vue'
import { Sunny, Moon } from '@element-plus/icons-vue'
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const isDarkMode = ref(store.state.user.isDarkMode)

const handleSwitchMode = (value) => {
  store.dispatch('setUserState', {
    isSubscribe: store.state.user.isSubscribe,
    isDarkMode: value
  })
}
watch(
  () => isDarkMode.value,
  (newValue) => {
    console.log(newValue)
    isDarkMode.value = newValue
  }
)
</script>

<style lang="scss" scoped></style>
