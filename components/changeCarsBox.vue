<template>
  <div class="border-b-2 py-6">
    <div class="flex gap-4 justify-between w-full items-center">
      <h1 class="text-4xl">{{ label }}</h1>
      <NuxtLink to="#">see all</NuxtLink>
    </div>
    <div class="flex gap-4">
      <slot />
    </div>
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
