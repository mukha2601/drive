<template>
  <div class="p-4 flex border-2 gap-4">
    <NuxtImg :src="item.image" class="max-w-[300px] object-cover" />
    <div class="flex flex-col justify-between gap-4 w-full">
      <h1>{{ item.title }}</h1>
      <p>{{ item.descr }}</p>
      <div class="flex justify-between items-center w-full">
        <span>{{ item.data }}</span>
        <Button label="laern more" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
