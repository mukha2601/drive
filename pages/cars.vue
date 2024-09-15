<script setup>
import { useStore } from "@/store/index";
const store = useStore();

function resetPage() {
  store.carType = null;
  store.carBrand = null;
  // Sahifani yangilash
  store.filter = store.carsAll;
}
</script>

<template>
  <div class="flex flex-col">
    <nav
      class="w-full border-2 border-t-0 p-4 grid grid-cols-4 gap-4 sticky top-[60px] bg-[#e3e4e6] shadow-xl z-20"
    >
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
