import { defineStore } from "pinia";

export const useStore = defineStore("home", {
  state: () => {
    return {
      carsAll: [],
      brands: [],
      filter: [],
      category: [],
      carType: null,
      carBrand: null,
      search: [],
    };
  },
  actions: {
    // Tanlangan category_id bo'yicha mashinalarni filterga saqlash
    getCarType(categoryId) {
      this.filter = this.carsAll.filter(
        (car) => car.category_id === categoryId
      );
    },
    getCarBrand(carBrand) {
      this.filter = this.carsAll.filter((car) => car.brand_id === carBrand);
    },
  },
});
