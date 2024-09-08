import { defineStore } from "pinia";

export const useStore = defineStore("home", {
  state: () => {
    return {
      brands: [],
      carsAll: [],
      budgetCars: [],
      sportCars: [],
      luxuryCars: [],
      muscleCars: [],
      convertibleCars: [],
      suvCars: [],
      americanCars: [],
    };
  },
});
