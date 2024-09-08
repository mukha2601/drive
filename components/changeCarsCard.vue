<template>
  <div class="p-4 flex flex-col border-2 gap-4">
    <NuxtImg />
    <p class="text-bold"></p>
    <p>per day</p>
  </div>
</template>

<script setup>
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
