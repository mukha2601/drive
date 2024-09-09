<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, Zoom, Grid } from "swiper/modules";
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
  const brands = fetch("https://api.autozoomrental.com/api/brands/");
  const cars = fetch("https://api.autozoomrental.com/api/cars");

  brands
    .then((res) => res.json())
    .then((res) => {
      console.log(res.data);

      store.brands = res.data;
    });

  cars
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      store.carsAll = res.data;
      res.data.forEach((element) => {
        if (element.category.name_en == "Luxury Cars") {
          store.luxuryCars.push(element);
        }
      });
      res.data.forEach((element) => {
        if (element.category.name_en == "Sports Cars") {
          store.sportCars.push(element);
        }
      });
      res.data.forEach((element) => {
        if (element.category.name_en == "Budget Cars") {
          store.budgetCars.push(element);
        }
      });
      res.data.forEach((element) => {
        if (element.category.name_en == "SUV") {
          store.suvCars.push(element);
        }
      });
      res.data.forEach((element) => {
        if (element.category.name_en.trim() == "Muscle") {
          store.muscleCars.push(element);
        }
      });
      res.data.forEach((element) => {
        if (element.category.name_en == "American Brands") {
          store.americanCars.push(element);
        }
      });
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
  <Section id="brands" label="Brands">
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
    <div class="budgetCars">
      <div class="flex gap-4 justify-between w-full items-center mb-6">
        <h1 class="text-4xl">BUDGET CARS</h1>
        <NuxtLink to="#">see all</NuxtLink>
      </div>
      <Swiper :slides-per-view="3.5" :space-between="20">
        <SwiperSlide v-for="item in store.budgetCars" :key="item.id">
          <ChangeCarsCard
            :img="
              item.car_images.find((image) => image.is_main)?.image.src ||
              item.car_images[0].image.src
            "
            :price="item.price_in_aed + ' aed/' + item.price_in_usd + ' usd'"
            :name="item.brand.title + ' ' + item.model.name"
            :perday="item.limitperday"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="budgetCars">
      <div class="flex gap-4 justify-between w-full items-center mb-6">
        <h1 class="text-4xl">BUDGET CARS</h1>
        <NuxtLink to="#">see all</NuxtLink>
      </div>
      <Swiper :slides-per-view="3.5" :space-between="20">
        <SwiperSlide v-for="item in store.budgetCars" :key="item.id">
          <ChangeCarsCard
            :img="
              item.car_images.find((image) => image.is_main)?.image.src ||
              item.car_images[0].image.src
            "
            :price="item.price_in_aed + ' aed/' + item.price_in_usd + ' usd'"
            :name="item.brand.title + ' ' + item.model.name"
            :perday="item.limitperday"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </Section>
</template>
