<script setup>
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useStore } from "@/store/index";
import { useRoute } from "vue-router";
import { useRuntimeConfig } from "#app";

const store = useStore();
const route = useRoute();
const config = useRuntimeConfig();
const imgUrl = config.public.VITE_IMGURL;

const carId = route.params.id; // Get carId from route params

const selectedCarItem = computed(() => {
  return store.carsAll.find((item) => item.id === carId);
});

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const modules = [FreeMode, Navigation, Thumbs];
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
</script>

<template>
  <Section>
    <div class="grid grid-cols-2">
      <div
        class="max-w-[500px]"
        v-if="selectedCarItem && selectedCarItem.car_images"
      >
        <swiper
          :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }"
          :loop="true"
          :spaceBetween="10"
          :navigation="true"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="modules"
          class="mySwiper2"
        >
          <swiper-slide
            v-for="(image, index) in selectedCarItem.car_images.filter(
              (item) => item.is_main === false
            )"
            :key="index"
          >
            <NuxtImg :src="imgUrl + image.image.src" />
          </swiper-slide>
        </swiper>
        <swiper
          @swiper="setThumbsSwiper"
          :loop="true"
          :spaceBetween="10"
          :slidesPerView="4"
          :freeMode="true"
          :watchSlidesProgress="true"
          :modules="modules"
          class="mySwiper mt-3"
        >
          <swiper-slide
            v-for="(image, index) in selectedCarItem.car_images.filter(
              (item) => item.is_main === false
            )"
            :key="index"
          >
            <NuxtImg :src="imgUrl + image.image.src" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="w-full border-2">
        <h1 class="text-2xl">cobalt</h1>
        <ul class="grid grid-cols-2">
          <li>
            <span class="text-orange-500 group-hover:text-white">price:</span>
            {{ 500 + " aed / " + 300 + " usd" }}
          </li>
          <li>
            <span class="text-orange-500 group-hover:text-white">per day:</span>
            {{ 500 + " aed / " + 300 + " usd" }}
          </li>
          <li>
            <span class="text-orange-500 group-hover:text-white">Deposit:</span>
            {{ 500 + " aed / " + 300 + " usd" }}
          </li>
          <li>
            <span class="text-orange-500 group-hover:text-white">Premium protection:</span>
            {{ 500 + " aed / " + 300 + " usd" }}
          </li>
        </ul>
      </div>
    </div>
  </Section>
</template>
