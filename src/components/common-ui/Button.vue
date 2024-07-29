<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string
  }>(),
  {
    name: '',
  }
)

const emits = defineEmits(['click'])

const handleClick = (event: MouseEvent) => {
  console.log('click')
  emits('click', event)
}
</script>
<template>
  <button class="custom-button" @click="handleClick">
    {{ name }}
  </button>
</template>

<style scoped>
.custom-button {
  align-items: center;
  padding: 10px;
}

.custom-button:hover {
  cursor: pointer;
}
</style>
