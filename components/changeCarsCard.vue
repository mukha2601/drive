<script setup>
const imageUrl = "https://api.autozoomrental.com/api/uploads/images/";

const props = defineProps({
  item: {
    type: Object,
    required: true, // "Required" emas, "required" kichik harflarda bo'lishi kerak
  },
});
</script>

<template>
  <div class="p-4 flex h-96 flex-col justify-between border-2 gap-4">
    <div class="flex h-2/3 justify-center items-center w-full">
      <NuxtImg
        :src="
          imageUrl +
          (item.car_images.find((image) => image.is_main)?.image.src ||
            item.car_images[0].image.src)
        "
        class="w-full"
      />
    </div>
    <p class="text-bold">{{ item.brand.title + " " + item.model.name }}</p>
    <p>
      <span class="text-orange-500">price:</span>
      {{ item.price_in_aed + " aed / " + item.price_in_usd + " usd" }}
    </p>
    <p><span class="text-orange-500">per day:</span> {{ item.limitperday }}</p>
  </div>
</template>
