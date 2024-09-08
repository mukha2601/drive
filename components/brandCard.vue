<template>
  <div class="px-8 py-6 border-2" :key="brands.id">
    <NuxtImg :src="brands.image_src" class="w-12 h-12"/>
    <p>{{ brands.title }}</p>
  </div>
</template>

<script setup>
defineProps({
  brands: {
    type: Object,
    required: true,
  },
});
</script>
