<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
interface Example {
  title: string
  path: string
}
const examples = ref<Example[]>([
  {
    title: 'Popup',
    path: 'popup',
  },
])

const exampleNavigator = (path: string) => {
  router.push(`examples/${path}`)
}
</script>
<template>
  <div class="examples-list">
    <div
      v-for="example in examples"
      :key="`example-${example.title}`"
      class="example-item"
    >
      <span> {{ example.title }}</span>
      <button @click="exampleNavigator(example.path)">View</button>
    </div>
  </div>
</template>

<style scoped>
.examples-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  border: 1px solid;
}
.example-item {
  display: flex;
  padding: 10px;
  justify-content: space-around;
  align-items: center;
}

.example-item span {
  font-size: 20px;
}

.example-item button {
  background-color: #000000;
  color: #ffffff;
}
</style>
<route lang="yaml">
name: examples
</route>
