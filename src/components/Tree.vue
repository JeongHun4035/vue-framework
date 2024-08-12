<script setup lang="ts">
import { IMenu } from '@/types'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    dataArray: IMenu[]
  }>(),
  {
    dataArray: () => [],
  }
)
</script>

<template>
  <div></div>
</template>

<style scoped></style>
