import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/users/HomeView.vue'
import ProfileView from '@/views/users/ProfileView.vue'
import CartView from '@/views/users/CartView.vue'
import SearchView from '@/views/users/SearchView.vue'
import CheckoutView from '@/views/users/CheckoutView.vue'
import SuccessView from '@/views/users/SuccessView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path:'/cart',
      name: 'cart',
      component: CartView
    }
    ,
    {
      path:'/search',
      name: 'search',
      component: SearchView
    }
    ,
    {
      path:'/checkout',
      name: 'checkout',
      component: CheckoutView
    }
    ,
    {
      path:'/success',
      name: 'success',
      component: SuccessView
    }
  ]
})

export default router
