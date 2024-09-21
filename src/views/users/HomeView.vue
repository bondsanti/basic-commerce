<script setup>
import {RouterLink,useRouter} from 'vue-router'
import UserLayout from "@/layouts/UserLayout.vue";
import Product from "@/components/Product.vue";
import Swal from 'sweetalert2'
import { useProductStore } from "@/stores/users/products";
import { useCartStore } from "@/stores/users/cart";

const router = useRouter()
const ProductStore = useProductStore();
const CartStore = useCartStore();

const addToCart = (product) => {
  // console.log("add to cart");
  // console.log(product);
  CartStore.addToCart(product);
  Toast.fire({
    icon: "success",
    title: "add cart successfully",
  });
  router.push({name:'cart'})
};

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});
</script>

<template>
  <div>
    <UserLayout>
      <div
        class="้h-96 hero"
        style="
          background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);
        "
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="text-center hero-content text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello Pop Shop</h1>
            <p class="mb-5">POP NOW ได้เปิดตัวอย่างแบบเต็มรูปแบบแล้ว</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <!-- product-->
      <Product :products="ProductStore.list" :addToCart="addToCart"> </Product>
    </UserLayout>
  </div>
</template>
