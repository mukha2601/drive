<script setup>
import { useStore } from "@/store/index";
const store = useStore();

onMounted(async () => {
  store.filter = [];
  try {
    // Fetching cars
    const carsResponse = await fetch(
      "https://api.autozoomrental.com/api/cars/category"
    );
    const category = await carsResponse.json();
    console.log(category.data);
    store.category = category.data;
    category.data?.forEach((element) => {
      element.cars?.forEach((item) => {
        store.filter.push(item);
      });
    });
  } catch (error) {
    console.log(error);
  }
});

function resetPage() {
  store.carType = null
  store.carBrand = null
  // Sahifani yangilash
  // window.location.reload();
}
</script>

<template>
  <div class="flex flex-col">
    <nav
      class="w-full border-2 border-t-0 p-4 grid grid-cols-4 gap-4 sticky top-[60px] bg-[#e3e4e6] shadow-xl z-20"
    >
      <!-- <label for="carType">Car Type</label> -->
      <USelect
        v-model="store.carType"
        color="black"
        placeholder="Car Type"
        variant="outline"
        :options="
          store.category.map((item) => ({
            key: item.id,
            value: item.id,
            label: item.name_en,
          }))
        "
        @change="store.getCarType(store.carType)"
        :ui="{
          rounded: 'rounded-none',
          padding: { sm: 'py-2' },
          variant: { outline: 'bg-gray-300 ' },
        }"
      />

      <USelect
        v-model="store.carBrand"
        color="black"
        placeholder="Car Brand"
        variant="outline"
        :options="
          store.category
            .find((item) => item.id == store.carType)
            ?.cars.map((car) => ({
              key: car.brand.id,
              value: car.brand.id,
              label: car.brand.title,
            })) ||
          store.carsAll.map((car) => ({
              key: car.brand.id,
              value: car.brand.id,
              label: car.brand.title,
            }))
        "
        @change="store.getCarBrand(store.carBrand)"
        :ui="{
          rounded: 'rounded-none',
          padding: { sm: 'py-2' },
          variant: { outline: 'bg-gray-300 ' },
        }"
      />

      <!-- <select
        v-if="store.carType"
        v-model="store.carBrand"
        class="bg-white text-black"
        @change="store.getCarBrand(store.carBrand)"
      >
        <option value="" disabled>Car Type</option>
        <option
          v-for="car in store.category.find((item) => item.id == store.carType)
            ?.cars"
          :key="car.brand.id"
          :value="car.brand.id"
        >
          {{ car.brand.title }}
        </option>
      </select> -->

      <button
        @click="resetPage(), console.log('clicked')"
        class="w-full border-2"
      >
        reset
      </button>
    </nav>
    <main class="w-full border-2 border-t-0 grid grid-cols-4 p-4 gap-4">
      <div v-for="item in store.filter">
        <ChangeCarsCard :item="item" />
      </div>
    </main>
  </div>
</template>
