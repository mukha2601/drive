<template>
  <div class="min-h-40 flex flex-col gap-4 justify-center items-center py-4 border-2">
    <NuxtImg :src="imageUrl + brands.image_src" class="h-12" />
    <p>{{ brands.title }}</p>
  </div>
</template>

<script setup>
const imageUrl = "https://api.autozoomrental.com/api/uploads/images/";
defineProps({
  brands: {
    type: Object,
    required: true,
  },
});
</script>
