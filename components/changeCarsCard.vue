<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  route: {
    type: String,
  },
});
</script>

<template>
  <NuxtLink
    :to="`/carsinfo/${item.id}`"
    class="p-2 md:p-4 flex flex-col justify-between border-2 gap-2 md:gap-4 w-full hover:bg-orange-500 group"
  >
    <div class="flex h-2/3 justify-center items-center w-full">
      <NuxtImg
        :src="
          'https://realauto.limsa.uz/api/uploads/images/' +
          (item.car_images.find((image) => image.is_main)?.image.src ||
            item.car_images[0].image.src)
        "
        class="w-full"
      />
    </div>
    <p class="text-xs sm:text-sm lg:text-lg">
      {{ item.brand.title + " " + item.model.name.slice(0, 16) }}
    </p>
    <p class="text-xs sm:text-sm lg:text-lg">
      <span class="text-orange-500 group-hover:text-white">price:</span>
      {{ item.price_in_aed + " aed / " + item.price_in_usd + " usd" }}
    </p>
    <p class="text-xs sm:text-sm lg:text-lg">
      <span class="text-orange-500 group-hover:text-white">per day:</span>
      {{ item.limitperday }}
    </p>
  </NuxtLink>
</template>
