<template>
  <div class="flex flex-col gap-4">
    <header>
      <Header
        headerTitle="Tapsi Food"
        @delete-selected="deleteSelectedProducts"
      />
    </header>

    <main
      class="flex flex-col gap-4 p-2 overflow-y-scroll border-2 border-gray-700 rounded-lg"
    >
      <div v-if="error" class="text-red-500">{{ error }}</div>
      <div v-if="loading" class="text-center">Loading...</div>
      <template v-else>
        <Product
          v-for="product in products"
          :key="product.id"
          :product-name="product.title"
          :product-image="product.base64Image"
          v-model="product.selected"
        />
      </template>
    </main>

    <footer>
      <Footer @add-product="addProduct" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useProducts } from "@composables/useProducts";
const { products, loading, error, addProduct, deleteSelectedProducts } = useProducts();
</script>
