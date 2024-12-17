<template>
  <div
    class="fixed bottom-0 h-[100px] bg-gray-200 w-full left-0 flex flex-col justify-center items-center gap-2 p-2"
  >
    <input
      v-model="productTitle"
      type="text"
      class="w-full border rounded-lg h-[40px] outline-none focus:border focus:border-blue-700 p-2"
      placeholder="Enter product title"
    />
    <button
      @click="handleAddProduct"
      class="w-full px-4 py-2 text-white bg-blue-600 border rounded-lg hover:bg-blue-700"
      :disabled="!productTitle.trim()"
    >
      ADD
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const productTitle = ref("");
const emit = defineEmits(["add-product"]);

function handleAddProduct() {
  if (productTitle.value.trim()) {
    emit("add-product", productTitle.value.trim());
    productTitle.value = "";
  }
}
</script>
