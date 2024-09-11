<script setup>
import { useStore } from "@/store/index";
const store = useStore();

onMounted(async () => {
  try {
    // Fetching cars
    const carsResponse = await fetch(
      "https://api.autozoomrental.com/api/cars/category"
    );
    const category = await carsResponse.json();
    console.log(category.data);
    category.data?.forEach((element) => {
      element.cars?.forEach((item) => {
        store.filter.push(item);
      });
    });
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="flex flex-col">
    <aside class="w-full border-2"></aside>
    <main class="w-full border-2 grid grid-cols-4 p-4 gap-4">
      <div v-for="item in store.filter">
        <ChangeCarsCard :item="item" />
      </div>
    </main>
  </div>
</template>
