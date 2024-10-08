import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
    checkOut:{}
  }),
  getters: {
    summaryItem(state) {
      return state.items.reduce((acc, item) => acc + item.quantity, 0);
    },
    summaryPrice(state) {
      return state.items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    },
  },
  actions: {
    loadCart() {
      const prevCart = localStorage.getItem("cart-data");
      if (prevCart) {
        this.items = JSON.parse(prevCart);
      }
    },
    addToCart(productData) {
      const findProductIndex = this.items.findIndex((item) => {
        return item.name === productData.name;
      });

      if (findProductIndex < 0) {
        productData.quantity = 1;
        this.items.push(productData);
      } else {
        const currentItem = this.items[findProductIndex];
        this.updateQuantity(findProductIndex, currentItem.quantity + 1);
      }

      localStorage.setItem("cart-data", JSON.stringify(this.items));
    },
    updateQuantity(index, quantity) {
      this.items[index].quantity = quantity;
      localStorage.setItem("cart-data", JSON.stringify(this.items));
    },
    removeItemIncard(index) {
      this.items.splice(index, 1);
      localStorage.setItem("cart-data", JSON.stringify(this.items));
    },
    checkOut(userData)
    {
      const ordarData = {
        ...userData,
        totalPrice : this.summaryPrice,
        paymentMedhod : 'Credit Card',
        createdData:(new Date()).toLocaleString(),
        orderNumber:`POP${Math.floor((Math.random()*90000)+10000)}`
      }
      localStorage.setItem('order-data',JSON.stringify(ordarData))
    },
    loadCheckout(){
      const ordarData = localStorage.setItem('order-data')
      if (ordarData) {
        this.checkOut = JSON.parse(ordarData)
      }
    }
  },
});
