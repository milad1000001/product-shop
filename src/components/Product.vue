<template>
  <div class="product-item">
    <img class="product-item__image" :src="productImage" @error="fallback.png" width="120px" height="120px">
    <strong class="product-item__name">{{ productName }}</strong>
    <input class="product-item__checkbox" type="checkbox"/>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  productName: string;
  productImage: string;
}
defineProps<IProps>();

</script>

<style lang="scss" scoped>
.product-item {
  @apply border-2 border-gray-400 rounded-lg flex justify-center items-center p-4 gap-4;

  &__image {
    @apply rounded-lg;
  }

  &__name {
    @apply flex-1;
  }

  &__checkbox {
    @apply cursor-pointer;
  }
}
</style>