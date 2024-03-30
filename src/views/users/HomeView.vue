<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import Product from "@/components/Product.vue";

import {useProductStore} from '@/stores/users/products';
const ProductStore = useProductStore();

</script>

<template>
  <div>
    <UserLayout>
      <div
        class="min-h-screen hero"
        style="
          background-image: url(https://www.wellshopcraft.com/Images/Banner/4CUTpNtB-banner%20slide-12109.jpg);
        "
      >
        <div class="hero-overlay bg-opacity-15"></div>
        <div class="text-center hero-content text-neutral-content">

        </div>
      </div>

      <!-- product-->
      <Product :products="ProductStore.list">
        
      </Product>
      <!-- <section class="grid grid-cols-1 gap-4 m-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        <div v-for="product in ProductStore.list" :key="product.id" class="w-full shadow-lg card bg-base-100">
        <figure>
          <img
            :src="product.imageUrl"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{product.name}}</h2>
          <p>{{product.about}}</p>
          <div class="justify-end card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      </section> -->

    </UserLayout>
  </div>
</template>
