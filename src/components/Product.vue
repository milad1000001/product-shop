<template>
  <div class="product-item">
    <img
      class="product-item__image"
      :src="productImage"
      loading="lazy"
      @error="onError"
      width="120px"
      height="120px"
    />
    <strong class="product-item__name">{{ productName }}</strong>
    <input class="product-item__checkbox" type="checkbox" v-model="selected" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watch } from "vue";

interface Props {
  productName: string;
  productImage: string;
  modelValue?: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

const selected = ref(props.modelValue ?? false);

watch(selected, (newVal) => {
  emit("update:modelValue", newVal);
});

const onError = "https://via.placeholder.com/120";
}
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
