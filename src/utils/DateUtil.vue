<template>
  {{ today }}
</template>

<script setup>
import { defineProps } from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/ko' // 한국어 로케일
import 'dayjs/locale/en'

const props = defineProps(['locale'])

dayjs.locale(props.locale)

const today = dayjs().format('YYYY-MM-DD dddd')
</script>

<style lang="scss" scoped></style>
