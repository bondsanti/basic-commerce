<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import iconClose from "@/components/icons/iconClose.vue";
</script>

<template>
  <div>
    <UserLayout>
      <div class="flex mt-2">
        <div class="flex-auto w-64 p-4 bg-base-200">
          <div class="text-2xl font-bold">Your Cart</div>
          <div class="flex">
            <div class="flex-1">
              <img
                class="w-full p-5"
                src="https://www.wellshopcraft.com/Images/Products/2958241-20220902-214917.jpg"
                alt=""
              />
            </div>
            <div class="flex-1">
              <div class="justify-between h-full p-5 flex-cols">
                
                  <div class="relative grid grid-cols-2">
                    <div>
                      <div><strong>1</strong></div>
                      <div>2</div>
                      <div>3</div>
                    </div>
                   
                    <select class="w-1/2 p-4 select-info select-sm">
                      <option
                        v-for="qty in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
                        :key="qty"
                      >
                        {{ qty }}
                      </option>
                    </select>
                    <div class="absolute top-0 right-0">
                      <iconClose></iconClose>
                    </div>
                   
                  </div>
                  <div><strong>instock</strong></div>
                  
              </div>
              
            </div>
          </div>
        </div>
        <div class="flex-auto w-32 p-4 bg-slate-200">
          <div class="text-2xl font-bold">Order Summary</div>
          <div class="my-4">
            <div class="flex justify-between">
              <div>ราคาสินค้าทั้งหมด</div>
              <div>100x</div>
            </div>
            <div class="flex justify-between">
              <div>ค่าส่ง</div>
              <div>100x</div>
            </div>
            <div class="flex justify-between">
              <div>ราคารวมทั้งหมด</div>
              <div>100x</div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  </div>
</template>
