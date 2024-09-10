import { defineStore } from "pinia";

export const useStore = defineStore("home", {
  state: () => {
    return {
      carsAll: [],
      brands: [],
      budgetCars: [],
      sportCars: [],
      luxuryCars: [],
      muscleCars: [],
      convertibleCars: [],
      suvCars: [],
      americanCars: [],
      filter: [],
    };
  },
});
