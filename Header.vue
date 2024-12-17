<template>
  <div class="header">
    <h1>{{ headerTitle }}</h1>
    <img
      src="https://via.placeholder.com/32"
      alt="delete"
      @click="onDeleteClicked"
      class="cursor-pointer"
    />
  </div>
</template>

<script setup lang="ts">
interface IProps {
  headerTitle: string;
}
const props = defineProps<IProps>();

const emit = defineEmits(["delete-selected"]);

function onDeleteClicked() {
  emit("delete-selected");
}
</script>

<style lang="scss" scoped>
.header {
  @apply flex justify-between items-center bg-gray-300 p-4 border rounded-lg;
}
</style>
