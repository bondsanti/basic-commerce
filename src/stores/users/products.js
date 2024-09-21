import { defineStore } from 'pinia'

export const useProductStore = defineStore('counter',{
  state:() => ({
    list:[{
      id:1,
      name:'Happy Halloween Party Series-Sitting Pumpkin Vinyl Plush Pendant',
      imageUrl:'https://prod-thailand-res.popmart.com/default/20240910_202726_766894____20240910-202706_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp',
      quantity:10,
      about:'สูงโดยประมาณ 15 เซนติเมตร',
      state:'open',
      price:850
    },{
      id:2,
      name:'MEGA SKULLPANDA 1000% Egon Schiele',
      imageUrl:'https://prod-thailand-res.popmart.com/default/20240919_105418_551226____1000_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp',
      quantity:10,
      about:'760mm',
      state:'open',
      price:36900
    },{
      id:3,
      name:'POLAR - HELLO POLAR Season 1 Series Figures',
      imageUrl:'https://prod-thailand-res.popmart.com/default/20240913_154444_888736____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp',
      quantity:10,
      about:'สูงโดยประมาณ 5.5-10.6 เซนติเมตร',
      state:'open',
      price:380
    },{
      id:4,
      name:'Zsiga We All Are Kids Series Figures',
      imageUrl:'https://prod-thailand-res.popmart.com/default/20240913_154244_979965____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp',
      quantity:10,
      about:'สูงโดยประมาณ 7.5cm-10.3cm เซนติเมตร',
      state:'open',
      price:380
    }]
  }),
  actions: {
    filterProducts(showSearchText) {
      return this.list.filter(product => product.name.toLowerCase().includes(showSearchText));
    }
  }
});
