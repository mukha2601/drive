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

onMounted(async () => {
  try {
    // Fetching brands
    const brandsResponse = await fetch(
      "https://api.autozoomrental.com/api/brands/"
    );
    const brands = await brandsResponse.json();
    store.brands = brands.data;

    // Fetching cars
    const carsResponse = await fetch(
      "https://api.autozoomrental.com/api/cars/category"
    );
    const category = await carsResponse.json();
    console.log(category.data);

    category.data.forEach((item) => {
      item.cars?.forEach((element) => {
        store.carsAll.push(element);
        switch (element.category_id.trim()) {
          case "b029538b-8146-44f2-9d21-9949ffda29de":
            store.luxuryCars.push(element);
            break;
          case "ed1193e9-6002-45a7-b324-e65350e9ba6a":
            store.sportCars.push(element);
            break;
          case "f4a1a0c4-03d4-4f56-9741-bab882b70a81":
            store.budgetCars.push(element);
            break;
          case "45f4bded-3eeb-4f9c-8eee-f817b804b3ec":
            store.suvCars.push(element);
            break;
          case "5ed40ab6-133d-4897-bf98-8f68b35dfdd9":
            store.convertibleCars.push(element);
            break;
          case "9878a9b3-bbc3-4e33-a741-018197c7c60c":
            store.muscleCars.push(element);
            break;
          case "11003b30-8002-4233-9d8b-005263b55cd6":
            store.americanCars.push(element);
            break;
        }
      });
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

const titles = [
  {
    title: "BUDGET CARS",
    item: store.budgetCars,
  },
  {
    title: "SPORT CARS",
    item: store.sportCars,
  },
  {
    title: "LUXURY CARS",
    item: store.luxuryCars,
  },
  {
    title: "MUSCLE CARS",
    item: store.muscleCars,
  },
  {
    title: "CONVERTIBLE CARS",
    item: store.convertibleCars,
  },
  {
    title: "SUV CARS",
    item: store.suvCars,
  },
  {
    title: "AMERICAN BRANDS",
    item: store.americanCars,
  },
];
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
        <div class="absolute bottom-4 right-4 flex gap-4 z-10">
          <button @click="prevSlide">prev</button>
          <button @click="nextSlide">next</button>
        </div>
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
    <div v-for="element in titles">
      <ChangeCarsBox :label="element.title" :item="element.item" />
    </div>
  </Section>
  <Service/>
</template>
