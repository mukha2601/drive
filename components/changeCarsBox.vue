<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { useStore } from "@/store";
const { locale } = useI18n();
const store = useStore();

// Define props
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="budgetCars mb-6">
    <div class="flex gap-4 justify-between w-full items-center pb-6">
      <h1 class="text-4xl">
        {{ locale === "ru" ? item.name_ru : item.name_en }}
      </h1>
      <NuxtLink to="/cars">
        <Button @click="store.getCarType(item.id)" :label="$t('type.button')" />
      </NuxtLink>
    </div>
    <Swiper :slides-per-view="3.5" :space-between="20">
      <SwiperSlide v-for="car in item.cars" :key="car.id">
        <ChangeCarsCard :item="car" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
