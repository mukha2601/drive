<template>
  <div class="border-2 p-4 flex flex-col justify-between gap-4   ">
    <NuxtImg :src="item.img" class="object-cover" />
    <h1 class="text-xl">{{ item.variant }}</h1>
    <div class="flex gap-4">
      <span class="px-2 border-2 border-orange-500">{{ item.price }}</span>
      <p>{{ item.person }} person</p>
    </div>
    <p>{{ item.descr }}</p>
    <ul class="list-disc ps-4">
      <h1 class="-ms-4 text-xl">{{ item.subtitle }}</h1>
      <li>Premium Transfer to camp</li>
      <li>Dune Buggy riding 1.5 hours</li>
      <li>Cuadro 15 min</li>
      <li>Falcone shoting</li>
      <li>Camel</li>
      <li>VIP room</li>
      <li>Fruits, Drinks, BBQ</li>
    </ul>
    <Button label="book now" />
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
