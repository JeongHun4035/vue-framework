<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string
    type: 'default' | 'primary'
    width?: string
    height?: string
    backgroundColor?: string
    color?: string
    borderColor?: string
  }>(),
  {
    name: '',
    type: 'default',
    width: 'auto',
    height: '32px',
    backgroundColor: '',
    color: '',
    borderColor: '',
  }
)

const emits = defineEmits(['click'])

const handleClick = (event: MouseEvent) => {
  console.log('click')
  emits('click', event)
}
</script>

<template>
  <button
    class="custom-button"
    :class="type"
    :style="{ width, height, backgroundColor, color, borderColor }"
    @click="handleClick"
  >
    {{ name }}
  </button>
</template>

<style scoped>
.custom-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 12px;
  border: 2px solid white;
  transition: opacity 0.3s ease;
}

.custom-button.default {
  background-color: #000000;
  color: #ffffff;
}

.custom-button.primary {
  background-color: #067bf7;
  color: #ffffff;
}

.custom-button:hover {
  cursor: pointer;
  opacity: 0.7;
}
</style>
