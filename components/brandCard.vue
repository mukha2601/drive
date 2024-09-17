<template>
  <NuxtLink to="/cars" @click="store.getCarBrand(brands.id)">
    <div
      class="min-h-40 flex flex-col gap-4 justify-center items-center py-4 border-2 hover:bg-orange-500"
    >
      <NuxtImg :src="imageUrl + brands.image_src" class="h-12" />
      <p>{{ brands.title }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
import { useStore } from "@/store/index";
const store = useStore();
const imageUrl = "https://api.autozoomrental.com/api/uploads/images/";

defineProps({
  brands: {
    type: Object,
    required: true,
  },
});
</script>
