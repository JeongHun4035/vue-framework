<script setup lang="ts">
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
import Sidebar from '@/components/layouts/Sidebar.vue'

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="layout">
    <Header @toggle-sidebar="toggleSidebar" />
    <Sidebar :is-open="isSidebarOpen" />
    <div class="main">
      <slot />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.header {
  height: 60px;
}

.main {
  flex: 1;
  padding: 10px;
}

.footer {
  height: 60px;
}
</style>
