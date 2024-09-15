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
store.selectedCarId = carId;

const fetchCar = async () => {
  // Wait for store data to be available
  store.selectedCarItem = store.carsAll.find(
    (item) => item.id === store.selectedCarId
  );
};

onMounted(fetchCar);

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
        v-if="store.selectedCarItem && store.selectedCarItem.car_images"
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
            v-for="(image, index) in store.selectedCarItem.car_images.filter(
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
            v-for="(image, index) in store.selectedCarItem.car_images.filter(
              (item) => item.is_main === false
            )"
            :key="index"
          >
            <NuxtImg :src="imgUrl + image.image.src" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="w-full">
        <!-- Additional content can go here -->
      </div>
    </div>
  </Section>
</template>
