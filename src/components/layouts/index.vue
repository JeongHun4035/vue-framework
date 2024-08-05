<script setup lang="ts">
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
</script>

<template>
  <div class="layout">
    <Header class="header" />
    <main>
      <slot />
    </main>
    <Footer class="footer" />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.header {
  flex-shrink: 0;
}

main {
  flex: 1;
  overflow: auto;
  padding: 10px;
}

.footer {
  flex-shrink: 0;
}
</style>
