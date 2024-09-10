<template>
  <div class="flex gap-4 justify-between w-full items-center pb-6">
    <h1 class="text-4xl">{{ label }}</h1>
    <NuxtLink to="#">see all</NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    Required: false,
  },
});
</script>
