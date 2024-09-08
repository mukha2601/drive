<template>
  <div class="px-8 py-6 border-2">
    <NuxtImg :src="imageUrl + brands.image_src" class="w-12 h-12" />
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
