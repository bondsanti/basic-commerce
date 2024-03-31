<script setup>
import {ref,onMounted,computed,watch} from 'vue'
import {useRoute} from 'vue-router'
import Swal from 'sweetalert2'


import UserLayout from '@/layouts/UserLayout.vue';
import Product from "@/components/Product.vue";

import {useProductStore} from '@/stores/users/products';

const ProductStore = useProductStore();
const route = useRoute();
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

 
</script>

<template>
<div>
    <UserLayout>
      <div class="m-4 text-2xl font-bold text-center text-gray-700">คุณได้ค้นหา : <span class="text-teal-600">{{ showSearchText }}</span></div>

      <Product :products="filterProducts"></Product>
    </UserLayout>
</div>
</template>
