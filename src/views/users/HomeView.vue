<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import Product from "@/components/Product.vue";

import { useProductStore } from "@/stores/users/products";
const ProductStore = useProductStore();
</script>

<template>
  <div>
    <UserLayout>
      <div
        class="min-h-screen mt-2 hero"
        style="
          background-image: url(https://www.wellshopcraft.com/Images/Banner/4CUTpNtB-banner%20slide-12109.jpg);
        "
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="text-center hero-content text-neutral-content">

        </div>
      </div>
      <!-- product-->
      <Product :products="ProductStore.list"> </Product>
    </UserLayout>
  </div>
</template>
