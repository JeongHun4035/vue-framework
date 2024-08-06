<script setup lang="ts">
import { IMenu } from '@/types'
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
  <header>
    <div>
      <h1>My Header</h1>
    </div>
    <div>menu</div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  background-color: #efebe0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
