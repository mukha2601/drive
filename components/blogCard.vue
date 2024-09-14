<template>
  <div class="p-2 flex border-2 gap-4">
    <NuxtImg :src="image" class="max-w-[300px] object-cover" />
    <div class="flex flex-col justify-between gap-4 w-full">
      <h1>{{ title }}</h1>
      <p>{{ descr }}</p>
      <div class="flex justify-between items-center w-full">
        <span>{{ data }}</span>
        <Button label="laern more" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  descr: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
});
</script>
