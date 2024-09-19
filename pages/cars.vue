<script setup>
import { useStore } from "@/store/index";
const store = useStore();

function resetPage() {
  store.carType = null;
  store.carBrand = null;
  store.filter = store.carsAll;
}
</script>

<template>
  <div class="flex flex-col">
    <nav
      class="w-full border-2 border-t-0 grid max-sm:grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  p-2 sm:p-4 gap-2 sm:gap-4 sticky top-[60px] bg-[#e3e4e6] shadow-xl z-20"
    >
      <USelect
        v-model="store.carType"
        placeholder="Car Type"
        variant="outline"
        :options="
          store.category.map((category) => ({
            label: category.name_en,
            value: category.id,
          }))
        "
        @change="store.getCarType(store.carType)"
        :ui="{
          rounded: 'rounded-none',
          padding: { sm: 'py-2' },
          variant: { outline: 'bg-gray-300 ' },
          color: 'black',
        }"
      />

      <USelect
        v-model="store.carBrand"
        placeholder="Car Brand"
        variant="outline"
        :options="
          store.carType
            ? store.carsAll
                .filter((item) => item.category_id == store.carType)
                .map((car) => ({
                  value: car.brand.id,
                  label: car.brand.title,
                }))
            : store.brands.map((brand) => ({
                label: brand.title,
                value: brand.id,
              }))
        "
        @change="store.getCarBrand($event)"
        :ui="{
          rounded: 'rounded-none',
          padding: { sm: 'py-2' },
          variant: { outline: 'bg-gray-300 ' },
          color: 'black',
        }"
      />

      <button @click="resetPage()" class="w-full border-2 hover:bg-orange-500">reset</button>
    </nav>
    <div
      v-if="!store.filter.length"
      class="w-full h-96 border-2 border-y-0 flex justify-center items-center"
    >
      <p class="opacity-40">The information was not found!</p>
    </div>
    <main
      class="w-full border-2 border-t-0 grid max-sm:grid-cols-2 max-lg:grid-cols-3 lg:grid-cols-4 p-2 sm:p-4 gap-2 sm:gap-4"
    >
      <div v-for="item in store.filter">
        <ChangeCarsCard :item="item" />
      </div>
    </main>
  </div>
</template>
