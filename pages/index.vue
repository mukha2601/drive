<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Zoom,
  Grid,
} from "swiper/modules";
import "swiper/css/grid";
import "swiper/swiper-bundle.css";
import { useStore } from "@/store";
const store = useStore();
let swiper = null;

const onSwiper = (swiperInstance) => {
  swiper = swiperInstance;
};

const prevSlide = () => {
  if (swiper) {
    swiper.slidePrev();
  }
};

const nextSlide = () => {
  if (swiper) {
    swiper.slideNext();
  }
};

onMounted(() => {
  const data = fetch("https://api.autozoomrental.com/api/brands/");
  data
    .then((res) => res.json())
    .then((res) => {
      console.log(res.data);

      store.brands = res.data;
    });
});
</script>

<template>
  <section id="hero" class="w-full border-2 border-t-0">
    <div class="grid grid-cols-3 h-full grid-rows-1">
      <div
        class="left w-full border-e-2 h-full flex flex-col justify-between gap-6 p-4"
      >
        <h1 class="text-[62px]">TOP LUXURY CAR RENTAL DUBAI</h1>
        <p class="text-[20px] font-thin">
          Best sports car & supercar rental Dubai, Exclusive offers on luxury
          car rental Dubai Cheap price
        </p>
        <div class="flex items-center">
          <NuxtLink to="/">RENT A CAR DUBAI CATALOG</NuxtLink>
          <UIcon name="material-symbols:chevron-right" class="w-8 h-8" />
        </div>
      </div>
      <div class="right col-span-2 h-full p-4 relative">
        <div
          class="circle w-96 h-96 bg-orange-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        ></div>
        <Swiper slides-per-view="1" :loop="true" @swiper="onSwiper">
          <SwiperSlide :zoom="true">
            <img src="../assets/1.png" />
          </SwiperSlide>
          <SwiperSlide :zoom="true">
            <img src="../assets/2.png" />
          </SwiperSlide>
          <SwiperSlide :zoom="true">
            <img src="../assets/3.png" />
          </SwiperSlide>
        </Swiper>

        <button class="swiper-button-prev" @click="prevSlide"></button>
        <button class="swiper-button-next" @click="nextSlide"></button>
      </div>
    </div>
  </section>
  <Section label="Brands">
    <Swiper
      :space-between="20"
      :grid="{ rows: 2, fill: 'row' }"
      :slides-per-view="6"
      :modules="[Grid, Pagination]"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide
        class="flex justify-center items-center"
        v-for="item in store.brands"
        :key="item.id"
      >
        <BrandCard :brands="item" />
      </SwiperSlide>
    </Swiper>
  </Section>
  <Section>
    <ChangeCarsBox label="BUDGET CARS RENTAL DUBAI"></ChangeCarsBox>
  </Section>
</template>
