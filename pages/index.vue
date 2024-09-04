<script setup>
const items = [
  "https://picsum.photos/900/700?random=1",
  "https://picsum.photos/600/800?random=2",
  "https://picsum.photos/600/800?random=3",
  "https://picsum.photos/600/800?random=4",
  "https://picsum.photos/600/800?random=5",
];
</script>

<template>
  <section id="hero" class="w-full min-h-[60vh] border-2 border-t-0">
    <div class="grid grid-cols-3 h-full grid-rows-1">
      <div
        class="left border-e-2 h-full flex flex-col justify-between gap-6 p-4"
      >
        <h1 class="text-[70px]">TOP LUXURY CAR RENTAL DUBAI</h1>
        <p class="text-[20px]">
          Best sports car & supercar rental Dubai, Exclusive offers on luxury
          car rental Dubai Cheap price
        </p>
        <div class="flex items-center">
          <NuxtLink to="/">RENT A CAR DUBAI CATALOG</NuxtLink>
          <UIcon name="material-symbols:chevron-right" class="w-8 h-8" />
        </div>
      </div>
      <div class="right col-span-2 h-full">
        <UCarousel
          :items="items"
          :ui="{
            item: 'basis-full',
            container: 'rounded-lg',
          }"
          arrows
          class="w-64 mx-auto"
        >
          <template #default="{ item }">
            <img :src="item" class="w-full" draggable="false" />
          </template>

          <template #prev="{ onClick, disabled }">
            <button :disabled="disabled" @click="onClick">Prev</button>
          </template>

          <template #next="{ onClick, disabled }">
            <button :disabled="disabled" @click="onClick">Next</button>
          </template>
        </UCarousel>
      </div>
    </div>
  </section>
</template>
