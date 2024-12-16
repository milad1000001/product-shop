<template>
  <div class="header">
    <h1>{{ headerTitle }}</h1>
    <img src="https://via.placeholder.com/32" alt="delete"/>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  headerTitle: string
}
defineProps<IProps>();

</script>

<style lang="scss" scoped>
.header {
  @apply flex justify-between items-center bg-gray-300 p-4 border rounded-lg;
}
</style>