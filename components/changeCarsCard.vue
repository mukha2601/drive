<template>
  <div class="p-4 flex flex-col border-2 gap-4">
    <NuxtImg :src="imageUrl + img" class="w-20"/>
    <p class="text-bold">{{ name }}</p>
    <p>per day</p>
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
});
</script>
