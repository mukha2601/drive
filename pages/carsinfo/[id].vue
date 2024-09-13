<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useStore } from "@/store/index";
const store = useStore();
const route = useRoute();

const car = store.carsAll.find((item) => item.id === route.params.id);
console.log(car);


// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
const modules = [FreeMode, Navigation, Thumbs];

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
</script>

<template>
  <Section>
    <div class="grid grid-cols-2">
      <div class="max-w-[500px]">
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
            ><img
              src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
          ><swiper-slide
            ><img
              src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
          ><swiper-slide
            ><img
              src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
          ><swiper-slide
            ><img
              src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
          ><swiper-slide
            ><img
              src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
          ><swiper-slide
            ><img
              src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
          ><swiper-slide
            ><img
              src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
          ><swiper-slide
            ><img
              src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
          ><swiper-slide
            ><img
              src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
          ><swiper-slide
            ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
          /></swiper-slide>
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
            <!-- <swiper-slide
                v-for="image in car.car_images"
                :key="image.car_id"
            >
                <NuxtImg :src="image.image.src" />
            </swiper-slide> -->
        </swiper>
      </div>
      <div class="w-full">
        <!-- <p>
          <span class="text-orange-500 group-hover:text-white">price:</span>
          {{ item.price_in_aed + " aed / " + item.price_in_usd + " usd" }}
        </p>
        <p>
          <span class="text-orange-500 group-hover:text-white">per day:</span>
          {{ item.limitperday }}
        </p> -->
      </div>
    </div>
  </Section>
</template>
