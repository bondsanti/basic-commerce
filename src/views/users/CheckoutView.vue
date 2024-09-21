<script setup>
import {reactive} from "vue"
import { RouterLink ,useRouter} from "vue-router";
import UserLayout from "@/layouts/UserLayout.vue";
import { useCartStore } from "@/stores/users/cart";

const cartStore = useCartStore();
const router = useRouter();
const FormData = [
  {
    name: "Email address",
    field: "email",
  },
  {
    name: "Name",
    field: "name",
  },
  {
    name: "Address",
    field: "address",
  },
  {
    name: "Note",
    field: "note",
  },
];

const userFormData = reactive({
  email:'',
  name:'',
  address:'',
  note:''
})

const payment = () =>{
  cartStore.checkOut(userFormData)
  router.push({name:'success'})
}
</script>

<template>
  <div>
    <UserLayout>
      <div class="container mx-auto my-4">
      <!-- <h1 class="mb-4 text-4xl">Checkout</h1> -->
      <div class="flex">

        <section class="flex-auto w-64 bg-base-200">
        
          <div class="px-8 py-2">
            <div class="text-2xl font-bold">Your Cart</div>
            <div
              v-for="(form,index) in FormData" :key="index"
              class="w-full form-control"
            >
              <label class="label">
                <span class="label-text">{{ form.name }}</span>
              </label>

              <textarea
                v-if="form.field === 'address'"
                class="h-24 textarea textarea-bordered"
                placeholder="Address"
                v-model="userFormData[form.field]"
              ></textarea>
              <input
                v-else
                type="text"
                placeholder="Type here"
                class="w-full input input-bordered input-sm"
                v-model="userFormData[form.field]"
              />
            </div>
            <button class="w-full mt-4 btn btn-primary" @click="payment()">
              ชำระเงิน
            </button>
          </div>
        </section>
        <section class="flex-auto w-32 bg-slate-200">
          <div class="px-8">
            <ul>
              <li v-for="(item,index) in cartStore.items" class="flex px-2 py-6" :key="index">
                <img
                  class="object-cover object-center w-40"
                  :src="item.imageUrl"
                />
                <div class="flex flex-col justify-between ml-4">
                  <div>
                    <div><b>{{ item.name }}</b></div>
                    <div>จำนวน: {{ item.quantity }}</div>
                  </div>
                  <div class="flex mt-2">
                    <RouterLink :to="{ name: 'cart' }">
                      <button class="btn btn-sm btn-error">แก้ไข</button>
                    </RouterLink>
                  </div>
                </div>
              </li>
            </ul>
            <div class="divider"></div>
            <div class="mb-4">
              <h2 class="text-2xl">Order summary</h2>
              <div class="m-0 mt-4">
                <div class="flex justify-between mb-2 align-middle">
                <div>จำนวนสินค้าทั้งหมด</div>
                <div  class="font-bold">{{ cartStore.summaryItem }}</div>
                </div>
                <div class="flex justify-between mb-2 align-middle">

                  <div >ราคาสินค้าทั้งหมด</div>
                  <div class="font-bold">{{ cartStore.summaryPrice }}</div>
                </div>
                <div class="flex justify-between mb-2 align-middle">
                  <div>ค่าส่ง</div>
                  <div class="font-bold">0</div>
                </div>
                <div class="divider"></div>
                <div class="flex justify-between mb-2 align-middle">
                  <div class="font-bold">ราคาทั้งสิ้น</div>
                  <div class="font-bold">{{ cartStore.summaryPrice }}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </UserLayout>
  </div>
</template>
