<script setup>

import {ref,onMounted,computed,watch} from 'vue'
import {useRoute,useRouter} from 'vue-router'
import Swal from 'sweetalert2'


import UserLayout from '@/layouts/UserLayout.vue';
import Product from "@/components/Product.vue";

import {useProductStore} from '@/stores/users/products';
import { useCartStore } from "@/stores/users/cart";

const ProductStore = useProductStore();
const CartStore = useCartStore();
const route = useRoute();
const router = useRouter();
const showSearchText = ref('');


// onMounted(() => {
//   //console.log(route.query);
//   if (route.query && route.query.q) {
//     showSearchText.value = route.query.q;
//   }
// });

watch (()=>
route.query.q,(newSearchText)=>{
    showSearchText.value = newSearchText;
  },{immediate : true});

const filterProducts = computed(()=>{
  return ProductStore.filterProducts(showSearchText.value.toLowerCase())
});

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
      <div class="m-4 text-2xl font-bold text-center text-gray-700">คุณได้ค้นหา : <span class="text-teal-600">{{ showSearchText }}</span></div>

      <Product :products="filterProducts" :addToCart="addToCart"></Product>
    </UserLayout>
</div>
</template>
