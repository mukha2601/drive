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

function getCarTyp() {
  return store.category.map((item) => ({
    label: item.name_en,
    value: item.id,
  }));
}

const selectedCategoryId = ref("");

const filterCars = () => {
  if (selectedCategoryId.value) {
    store.filterCarsByCategory(selectedCategoryId.value);
  }
};

// function getCarBrand(carType) {
//   // Tanlangan carType ga mos bo'lgan kategoriyani filtrlaymiz
//   const selectedCategory = store.category.find((item) => item.id === carType);

//   // Agar kategoriyani topsak, uning ichidagi mashinalarni qaytaramiz
//   if (selectedCategory) {
//     return selectedCategory.cars.map((el) => ({
//       label: el.brand.title,
//       value: el.brand.id,
//     }));
//   }

//   // Agar carType mavjud bo'lmasa, bo'sh massiv qaytaramiz
//   return [];
// }

// function getCarModel() {}
</script>

<template>
  <div class="flex flex-col">
    <nav class="w-full border-2 border-t-0 p-4 grid grid-cols-4 gap-4">
      <select v-model="selectedCategoryId" @change="filterCars" class="bg-white text-black">
        <option disabled value="">Car type</option>
        <option
          v-for="item in store.category"
          :key="item.id"
          :value="item.id"
        >
          {{ item.name_en }}
        </option>
      </select>
      <!-- <USelect
        color="black"
        placeholder="Car type"
        v-model="selectedCategoryId"
        :options="carOptions"
        @change="filterCars"
      /> -->
      <!-- <USelect
        color="black"
        placeholder="Brands"
        v-model="store.carBrand"
        :options="getCarBrand(store.carType)"
      />
      <USelect
        v-if="store.carBrand"
        color="black"
        placeholder="Models"
        v-model="store.carBrand"
        :options="getCarModel(store.carBrand)"
      /> -->

      <div>
        <button>reset</button>
        <button>filter</button>
      </div>
    </nav>
    <main class="w-full border-2 border-t-0 grid grid-cols-4 p-4 gap-4">
      <div v-for="item in store.filter">
        <ChangeCarsCard :item="item" />
      </div>
    </main>
  </div>
</template>
