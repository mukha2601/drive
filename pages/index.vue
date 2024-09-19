<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation, Grid } from "swiper/modules";
const modules = [Autoplay, Pagination, Navigation];
import "swiper/swiper-bundle.css";
import { useStore } from "@/store";
const store = useStore();
let swiper = null;
const config = useRuntimeConfig();
const imgUrl = config.public.VITE_IMGURL;
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
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1">
      <div
        class="left w-full border-e-2 h-full flex flex-col justify-between gap-6 p-6"
      >
        <h1 class="text-[16px] sm:text-[22px] lg:text-[40px] leading-10">
          {{ $t("hero.title") }}
        </h1>
        <p class="text-[20px] font-thin">{{ $t("hero.subtitle") }}</p>
        <Button :label="$t('hero.button1')" />
      </div>
      <div class="right lg:col-span-2 h-full p-4 relative">
        <div
          class="w-[50%] h-full bg-orange-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        ></div>
        <Swiper
          :modules="modules"
          slides-per-view="1"
          :loop="true"
          @swiper="onSwiper"
          :spaceBetween="30"
          :centeredSlides="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          class="mySwiper"
        >
          <SwiperSlide :zoom="true" v-for="item in store.carsAll">
            <NuxtImg
              class="max-w-[500px] mb-10 min-h-96"
              :src="
                imgUrl +
                  item.car_images.find((image) => image.is_main)?.image.src ||
                item.car_images[0].image.src
              "
            />
          </SwiperSlide>
        </Swiper>
        <div class="absolute bottom-4 right-4 flex gap-4 z-10">
          <Button
            class="bg-[#e3e4e6]"
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
        420: {
          slidesPerView: 1.5,
          spaceBetween: 20,
          grid: { rows: 2, fill: 'row' },
        },
        640: {
          slidesPerView: 1.5,
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
      <h1 class="text-4xl">{{ $t("luxury.title1") }}</h1>
      <p>{{ $t("luxury.subtitle1") }}</p>
    </div>
    <div class="flex flex-col gap-4 mt-4">
      <h1 class="text-4xl">
        {{ $t("luxury.title2") }}
      </h1>
      <p>{{ $t("luxury.subtitle2") }}</p>
    </div>
  </Section>
  <Section>
    <div class="flex gap-4">
      <div class="w-1/2 h-80 border-2">
        <iframe
          class="w-full h-full"
          src="https://www.youtube.com/embed/6Bcg46rxqAE?si=Dq3CtBVkMd5Rg8EG"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div class="w-1/2 flex flex-col gap-4 justify-around">
        <h1 class="text-4xl">{{ $t("videopage.title") }}</h1>
        <p>{{ $t("videopage.subtitle") }}</p>
        <NuxtLink to="/cars">
          <Button :label="$t('videopage.button')" />
        </NuxtLink>
      </div>
    </div>
  </Section>
  <Faq />
</template>
