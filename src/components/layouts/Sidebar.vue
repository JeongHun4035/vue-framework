<script setup lang="ts">
import { IMenu } from '@/types'

withDefaults(
  defineProps<{
    isOpen: boolean
  }>(),
  {
    isOpen: false,
  }
)
const menuArray = ref<IMenu[]>([
  {
    parentId: '#',
    id: 'MENU_001',
    label: '메뉴 1',
  },
  {
    parentId: '#',
    id: 'MENU_002',
    label: '메뉴 2',
  },
  {
    parentId: 'MENU_002',
    id: 'MENU_002_1',
    label: '메뉴 2-1',
  },
  {
    parentId: 'MENU_002',
    id: 'MENU_002_2',
    label: '메뉴 2-2',
  },
  {
    parentId: 'MENU_002_2',
    id: 'MENU_002_2_1',
    label: '메뉴 2-2-1',
  },
  {
    parentId: '#',
    id: 'MENU_003',
    label: '메뉴 3',
  },
  {
    parentId: 'MENU_003',
    id: 'MENU_003_1',
    label: '메뉴 3-1',
  },
])
</script>

<template>
  <div class="sidebar" :class="{ 'is-open': isOpen }">
    <div>Side bar Area</div>
  </div>
</template>
<style scoped>
.sidebar {
  position: absolute;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #efebe0;
  color: #fff;
  transition: left 0.3s ease-in-out;
  z-index: 1000;
}

.sidebar.is-open {
  left: 0;
}
</style>
