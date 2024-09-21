<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import iconClose from "@/components/icons/iconClose.vue";
import { useCartStore } from "@/stores/users/cart";

const cartStore = useCartStore();
const changeQty = (event, index) => {
  const newQty = parseInt(event.target.value);
  cartStore.updateQuantity(index, newQty);
};
</script>

<template>
  <div>
    <UserLayout>
      <div class="flex mt-2">
        <div class="flex-auto w-64 p-4 bg-base-200">
          <div class="text-2xl font-bold">Your Cart</div>
          <div v-if="cartStore.items.length === 0">Cart is empty</div>
          <div
            class="flex"
            v-else
            v-for="(item, index) in cartStore.items"
            :key="index"
          >
            <div class="flex-1">
              <img
                class="w-full p-5"
                :src="item.imageUrl"
                alt=""
              />
            </div>
            <div class="flex-1">
              <div class="flex just-full jstify-between flex-cols">
                <div>
                  <div class="relative grid grid-cols-2">
                    <div>
                      <div>
                        <strong>{{ item.name }}</strong>
                      </div>
                      <div>{{ item.about }}</div>
                      <div>{{ item.price }}</div>
                    </div>

                    <select v-model="item.quantity"
                      @change="changeQty($event, index)"
                      class="w-1/2 ml-4 select-sm select select-warning"
                    >
                      <option
                        v-for="qty in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                        :key="qty"
                      >
                        {{ qty }}
                      </option>
                    </select>
                    <div
                      @click="cartStore.removeItemIncard(index)"
                      class="absolute top-0 right-0 cursor-pointer"
                    >
                      <iconClose></iconClose>
                    </div>
                  </div>
                  <div><strong>instock</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-auto w-32 p-4 bg-slate-200">
          <div class="text-2xl font-bold">Order Summary</div>
          <div class="my-4 divide-y divide-black">
            <div class="flex justify-between py-2">
              <div>ราคาสินค้าทั้งหมด</div>
              <div>{{ cartStore.summaryPrice }}</div>
            </div>
            <div class="flex justify-between py-2">
              <div>ค่าส่ง</div>
              <div>0</div>
            </div>
            <div class="flex justify-between py-2">
              <div>ราคารวมทั้งหมด</div>
              <div>{{ cartStore.summaryPrice }}</div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  </div>
</template>
