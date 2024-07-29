<script setup lang="ts">
withDefaults(
  defineProps<{
    percentage: number
  }>(),
  {
    percentage: 0,
  }
)
</script>

<template>
  <div class="overlay">
    <div class="progress-bar">
      <div class="progress" :style="{ width: percentage + '%' }"></div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.progress-bar {
  width: 80%;
  height: 10px;
  background: #ccc;
  border-radius: 5px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: #4caf50;
  transition: width 0.3s;
}
</style>
