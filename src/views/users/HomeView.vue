<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import Product from "@/components/Product.vue";

import { useProductStore } from "@/stores/users/products";
const ProductStore = useProductStore();
</script>

<template>
  <div>
    <UserLayout>
      <!-- product-->
      <Product :products="ProductStore.list"> </Product>
    </UserLayout>
  </div>
</template>
