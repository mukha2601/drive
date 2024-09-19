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
      <h1 class="md:text-xl lg:text-4xl">
        {{ locale === "ru" ? item.name_ru : item.name_en }}
      </h1>
      <NuxtLink to="/cars">
        <Button @click="store.getCarType(item.id)" :label="$t('type.button')" />
      </NuxtLink>
    </div>
    <Swiper
      :slidesPerView="1.5"
      :spaceBetween="20"
      :breakpoints="{
        420: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4.5,
          spaceBetween: 20,
        },
      }"
    >
      <SwiperSlide
        v-for="car in store.carsAll.filter((el) => el.category_id === item.id)"
        :key="car.id"
      >
        <ChangeCarsCard :item="car" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
