<script setup>
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/users/cart';

const cartStore = useCartStore()

onMounted(()=>{
  cartStore.loadCart();
})


</script>

<template>
  <RouterView />
</template>


