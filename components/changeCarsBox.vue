<template>
  <div class="border-2  p-6 flex">
    <div class="flex gap-4 justify-between w-full items-center">
      <h1 class="text-4xl">{{ label }}</h1>
      <NuxtLink to="#">see all</NuxtLink>
    </div>
    <slot />
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
