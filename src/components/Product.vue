<script setup>
import { defineProps } from 'vue';

defineProps({
    products: Array
})
</script>

<template>
  <section
    class="grid grid-cols-1 gap-4 m-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2"
  >
    <div
      v-for="(product, index) in products" :key="index"
      class="w-full shadow-lg card bg-base-100"
    >
      <figure>
        <img :src="product.imageUrl" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ product.name }}</h2>
        <p>{{ product.about }}</p>
        <div class="justify-end card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </section>
</template>
