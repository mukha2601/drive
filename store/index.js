import { defineStore } from "pinia";

export const useStore = defineStore("home", {
  state: () => {
    return {
      brands: [],
    };
  },
});
