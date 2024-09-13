<template>
  <div class="max-w-[1300px] mx-auto">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useStore } from "@/store";
const store = useStore();
onMounted(async () => {
  try {
    // Fetching brands
    const brandsResponse = await fetch(
      "https://api.autozoomrental.com/api/brands/"
    );
    const brands = await brandsResponse.json();
    store.brands = brands.data;

    // Fetching cars
    const carsResponse = await fetch(
      "https://api.autozoomrental.com/api/cars/category"
    );
    const category = await carsResponse.json();

    category.data.forEach((item) => {
      item.cars?.forEach((element) => {
        store.carsAll.push(element);

        switch (element.category_id.trim()) {
          case "b029538b-8146-44f2-9d21-9949ffda29de":
            store.luxuryCars.push(element);
            break;
          case "ed1193e9-6002-45a7-b324-e65350e9ba6a":
            store.sportCars.push(element);
            break;
          case "f4a1a0c4-03d4-4f56-9741-bab882b70a81":
            store.budgetCars.push(element);
            break;
          case "45f4bded-3eeb-4f9c-8eee-f817b804b3ec":
            store.suvCars.push(element);
            break;
          case "5ed40ab6-133d-4897-bf98-8f68b35dfdd9":
            store.convertibleCars.push(element);
            break;
          case "9878a9b3-bbc3-4e33-a741-018197c7c60c":
            store.muscleCars.push(element);
            break;
          case "11003b30-8002-4233-9d8b-005263b55cd6":
            store.americanCars.push(element);
            break;
        }
      });
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
console.log(store.carsAll);
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap");

* {
  border-color: black;
  color: black;
  scroll-behavior: smooth;
}

body {
  background-color: #e3e4e6;
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}

::-webkit-scrollbar {
  width: 0.4rem;
  background-color: rgb(75, 75, 75);
}

::-webkit-scrollbar-thumb {
  background: rgb(167, 167, 167);
}
</style>
