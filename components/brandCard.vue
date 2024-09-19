<template>
  <NuxtLink to="/cars" @click="store.getCarBrand(brands.id)">
    <div
      class="max-h-40 flex flex-col gap-4 justify-center items-center py-4 px-4 border-2 hover:bg-orange-500"
    >
      <NuxtImg
        :src="
          'https://realauto.limsa.uz/api/uploads/images/' + brands.image_src
        "
        class="max-h-12"
      />
      <p>{{ brands.title }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
import { useStore } from "@/store/index";
const store = useStore();
// const config = useRuntimeConfig();
// const imgUrl = config.public.VITE_IMGURL;

defineProps({
  brands: {
    type: Object,
    required: true,
  },
});
</script>
