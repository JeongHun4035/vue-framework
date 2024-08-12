<script setup lang="ts">
const emit = defineEmits(['toggle-sidebar'])
</script>

<template>
  <div class="header">
    <div>
      <span @click="emit('toggle-sidebar')"> Sidebar </span>
    </div>
    <div>Header Title</div>
    <div>header Options Area</div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  background-color: #efebe0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
