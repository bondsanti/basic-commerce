import { defineStore } from 'pinia'

export const useProductStore = defineStore('counter',{
  state:() => ({
    list:[{
      id:1,
      name:'Passion Fruit witbier m๓๒(m32)',
      imageUrl:'https://www.wellshopcraft.com/Images/Products/2958241-20220902-214917.jpg',
      quantity:10,
      about:'4.7% (can) - 490ML',
      state:'open',
      price:99
    },{
      id:2,
      name:'IPA m๓๒(m32)',
      imageUrl:'https://www.wellshopcraft.com/Images/Products/Large/1902440-20220902-213822.jpg',
      quantity:10,
      about:'6.2% (can) - 490ML',
      state:'open',
      price:109
    },{
      id:3,
      name:'HOPPY PLAE LAGER m๓๒(m32)',
      imageUrl:'https://www.wellshopcraft.com/Images/Products/Large/8145489-20220902-215344.jpg',
      quantity:10,
      about:'5% (can) - 490ML',
      state:'open',
      price:99
    },{
      id:4,
      name:'Khun Phaen Plai Kaew Pale Ale',
      imageUrl:'https://www.wellshopcraft.com/Images/Products/Large/8898526-20220902-230551.jpg',
      quantity:10,
      about:'4.7% (can) - 490ML',
      state:'open',
      price:99
    }]
  }),
  actions: {
    filterProducts(showSearchText) {
      return this.list.filter(product => product.name.toLowerCase().includes(showSearchText));
    }
  }
});
