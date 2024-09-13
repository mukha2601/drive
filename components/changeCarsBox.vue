<template>
  <div class="budgetCars mb-6">
    <div class="flex gap-4 justify-between w-full items-center pb-6">
      <h1 class="text-4xl">{{ label }}</h1>
      <NuxtLink to="/cars"><Button label="See All" /></NuxtLink>
    </div>
    <Swiper :slides-per-view="3.5" :space-between="20">
      <SwiperSlide v-for="item in item" :key="item.id">
        <ChangeCarsCard :item="item" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { useStore } from "@/store";
const store = useStore();

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  item: {
    type: Object,
    required: true,
  },
});
</script>
