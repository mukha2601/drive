<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation, Grid } from "swiper/modules";
const modules = [Autoplay, Pagination, Navigation];
import "swiper/swiper-bundle.css";
import { useStore } from "@/store";
const store = useStore();
let swiper = null;
// const config = useRuntimeConfig();
// const imgUrl = config.public.VITE_IMGURL;
const category = computed(() => store.category);
const loading = computed(() => !store.category || store.category.length === 0);

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
</script>

<template>
  <section id="hero" class="w-full border-2 border-t-0 shadow-2xl">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <div
        class="left w-full border-e-2 h-full flex flex-col max-sm:items-center gap-4 md:gap-6 p-4 md:p-6"
      >
        <h1 class="text-[16px] sm:text-[22px] lg:text-[36px] leading-14">
          {{ $t("hero.title") }}
        </h1>
        <p class="text-sm lg:text-[18px] leading-6 font-thin">
          {{ $t("hero.subtitle") }}
        </p>
        <Button :label="$t('hero.button1')" />
      </div>
      <div class="right md:col-span-2 h-full p-4 relative">
        <div
          class="w-[50%] h-full bg-orange-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        ></div>
        <Swiper
        :modules="modules"
          slides-per-view="1"
          :loop="true"
          @swiper="onSwiper"
          :centeredSlides="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
        >
          <SwiperSlide :zoom="true" v-for="item in store.carsAll">
            <NuxtImg
              :src="
                'https://realauto.limsa.uz/api/uploads/images/' +
                  item.car_images.find((image) => image.is_main)?.image.src ||
                item.car_images[0].image.src
              "
            />
          </SwiperSlide>
        </Swiper>
        <div class="absolute bottom-4 right-4 flex gap-4 z-10">
          <Button
            class="bg-[#e3e4e6] active:bg-red-500"
            :label="$t('hero.button2')"
            @click="prevSlide"
          />
          <Button
            class="bg-[#e3e4e6]"
            :label="$t('hero.button3')"
            @click="nextSlide"
          />
        </div>
      </div>
    </div>
  </section>
  <Section id="brands" :label="$t('brands.title')">
    <Swiper
      :breakpoints="{
        450: {
          slidesPerView: 2.5,
          spaceBetween: 20,
          grid: { rows: 2, fill: 'row' },
        },
        640: {
          slidesPerView: 3.5,
          spaceBetween: 20,
          grid: { rows: 2, fill: 'row' },
        },
        768: {
          slidesPerView: 4.5,
          spaceBetween: 20,
          grid: { rows: 2, fill: 'row' },
        },
        1024: {
          slidesPerView: 6.5,
          spaceBetween: 20,
          grid: { rows: 2, fill: 'row' },
        },
      }"
      :grid="{ rows: 2, fill: 'row' }"
      :slidesPerView="1.5"
      :spaceBetween="20"
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
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="item in category" :key="item.id">
        <ChangeCarsBox :item="item" />
      </div>
    </div>
  </Section>
  <Service />
  <Section>
    <div class="flex flex-col gap-4">
      <h1 class="text-md sm:text-xl md:text-2xl">{{ $t("luxury.title1") }}</h1>
      <p class="text-xs sm:text-lg md:text-xl font-thin">
        {{ $t("luxury.subtitle1") }}
      </p>
    </div>
    <div class="flex flex-col gap-4 mt-4">
      <h1 class="text-md sm:text-xl md:text-2xl">
        {{ $t("luxury.title2") }}
      </h1>
      <p class="text-xs sm:text-lg md:text-xl font-thin">
        {{ $t("luxury.subtitle2") }}
      </p>
    </div>
  </Section>
  <Section>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="w-full">
        <iframe
          class="w-full h-60 sm:h-96 md:h-[400px]"
          src="https://www.youtube.com/embed/6Bcg46rxqAE?si=Dq3CtBVkMd5Rg8EG"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div class="w-full flex flex-col gap-4 justify-around">
        <h1 class="text-md sm:text-2xl md:text-4xl">
          {{ $t("videopage.title") }}
        </h1>
        <p class="text-xs sm:text-lg md:text-xl font-thin">
          {{ $t("videopage.subtitle") }}
        </p>
        <NuxtLink to="/cars">
          <Button :label="$t('videopage.button')" />
        </NuxtLink>
      </div>
    </div>
  </Section>
  <Faq />
</template>
