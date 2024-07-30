<script setup lang="ts">
withDefaults(
  defineProps<{
    percentage: number
  }>(),
  {
    percentage: 0,
  }
)

const loadingText = ref('Loading...'.split(''))

function getAnimationDelay(index: number) {
  return { animationDelay: `${index * 0.1}s` }
}
</script>

<template>
  <div class="overlay">
    <div class="progress-area">
      <div class="loading-text">
        <span
          v-for="(char, index) in loadingText"
          :key="index"
          :style="getAnimationDelay(index)"
        >
          {{ char }}
        </span>
      </div>
      <div class="progress-bar">
        <div class="progress" :style="{ width: percentage + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes wobble {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

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

.progress-area {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #ffffff;
  align-items: center;
}

.loading-text span {
  display: inline-block;
  animation: wobble 1s infinite;
}

.progress-bar {
  width: 100%;
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
