<template>
  <div class="p-4 flex h-96 flex-col justify-between border-2 gap-4">
    <div class="flex h-2/3 justify-center items-center w-full">
      <NuxtImg :src="imageUrl + img" class="w-full" />
    </div>
    <p class="text-bold">{{ name }}</p>
    <p><span class="text-orange-500">price:</span> {{ price }}</p>
    <p><span class="text-orange-500">per day:</span> {{ perday }}</p>
  </div>
</template>

<script setup>
const imageUrl = "https://api.autozoomrental.com/api/uploads/images/";
defineProps({
  img: {
    type: String,
    Required: true,
  },
  name: {
    type: String,
    Required: true,
  },
  price: {
    type: String,
    Required: true,
  },
  perday: {
    type: String,
    Required: true,
  },
});
</script>
