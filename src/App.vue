<script setup lang="ts">
import { useRouter } from 'vue-router'
import LoadingProgress from '@/components/Progress.vue'
import { onErrorCaptured } from 'vue'
import Layout from '@/components/layouts/index.vue'

const isLoading = ref(false)
const percentage = ref(0)
const router = useRouter()

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

router.beforeEach(async (to, from, next) => {
  isLoading.value = true
  percentage.value = 0
  let progress = 0
  const interval = setInterval(() => {
    progress += 10
    if (progress > 100) progress = 100
    percentage.value = progress
  }, 100)

  await delay(1000)
  clearInterval(interval)
  next()
})

router.afterEach(() => {
  isLoading.value = false
  percentage.value = 100
})

onErrorCaptured((hook, instance, message) => {
  console.error(
    'Vue Global Error: hook: ',
    hook,
    '\n instance: ',
    instance,
    'message: ',
    message
  )
})
</script>

<template>
  <Layout>
    <LoadingProgress v-if="isLoading" :percentage="percentage" />
    <RouterView />
  </Layout>
</template>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#nprogress .spinner {
  top: 50% !important;
  right: 50% !important;
}
</style>
