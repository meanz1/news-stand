<template>
  <div :style="{ display: display, justifyCotent: justifyCotent, alignItem: alignItem }">
    <button
      class="subscribe-button"
      :style="{
        width: width,
        height: height,
        borderRadius: radius,
        backgroundColor: bgColor
      }"
      @click="handleClick"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
  width: String,
  height: String,
  radius: String,
  bgColor: String,
  display: String,
  justifyCotent: String,
  alignItem: String
})

const handleClick = () => {
  console.log(`${props.text}`, '버튼 클릭')
}
</script>

<style lang="scss" scoped></style>
