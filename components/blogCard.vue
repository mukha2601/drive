<template>
  <div class="p-2 sm:p-4 flex max-md:flex-col border-2 gap-4">
    <NuxtImg :src="item.image" class="w-full md:max-w-[300px] object-cover" />
    <div class="flex flex-col justify-between gap-4 w-full">
      <h1>{{ item.title }}</h1>
      <p>{{ item.descr }}</p>
      <div class="flex justify-between items-center w-full">
        <span>{{ item.data }}</span>
        <NuxtLink :to="item.link">
          <Button label="laern more" />
        </NuxtLink>
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
