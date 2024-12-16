<template>
  <div class="flex flex-col gap-4">
    <header>
      <Header :header-title="'Tapsi Food'"/>
    </header>
    <main class="flex flex-col gap-4 border-2 p-2 rounded-lg border-gray-700 overflow-y-scroll h-[400px]">
      <Product :product-name="'Product 1'" :product-image="'https://via.placeholder.com/120'" />
      <Product :product-name="'Product 2'" :product-image="'https://via.placeholder.com/120'" />
      <Product :product-name="'Product 3'" :product-image="'https://via.placeholder.com/120'" />
      <Product :product-name="'Product 4'" :product-image="'https://via.placeholder.com/120'" />
      <Product :product-name="'Product 5'" :product-image="'https://via.placeholder.com/120'" />
      <Product :product-name="'Product 6'" :product-image="'https://via.placeholder.com/120'" />
      <Product :product-name="'Product 7'" :product-image="'https://via.placeholder.com/120'" />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
<script setup lang="ts">
import Product from './components/Product.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>