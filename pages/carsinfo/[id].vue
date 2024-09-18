<script setup>
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useStore } from "@/store/index";
import { useRuntimeConfig } from "#app";

const store = useStore();
const route = useRoute();
const config = useRuntimeConfig();
const imgUrl = config.public.VITE_IMGURL;

const carId = route.params.id; // Get carId from route params

const selectedCarItem = computed(() => {
  return store.carsAll.find((item) => item.id === carId) || null;
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
    <div class="grid grid-cols-2 gap-8">
      <div class="w-full" v-if="selectedCarItem && selectedCarItem.car_images">
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
      <div
        class="w-full max-h-[600px] flex flex-col gap-4 justify-between"
        v-if="selectedCarItem"
      >
        <h1 class="text-3xl">
          {{
            selectedCarItem.brand.title +
            " " +
            selectedCarItem.model.name +
            " " +
            `(${selectedCarItem.color})`
          }}
        </h1>
        <ul class="grid grid-cols-2">
          <li>
            <span class="text-orange-500 group-hover:text-white">{{
              $t("carsinfo.price")
            }}</span>
            {{
              selectedCarItem.price_in_aed +
              " aed / " +
              selectedCarItem.price_in_usd +
              " usd"
            }}
          </li>
          <li>
            <span class="text-orange-500 group-hover:text-white">{{
              $t("carsinfo.perDay")
            }}</span>
            {{ selectedCarItem.limitperday + " aed " }}
          </li>
          <li>
            <span class="text-orange-500 group-hover:text-white">{{
              $t("carsinfo.deposit")
            }}</span>
            {{ selectedCarItem.deposit + " aed " }}
          </li>
          <li>
            <span class="text-orange-500 group-hover:text-white">{{
              $t("carsinfo.premiumProtection")
            }}</span>
            {{ selectedCarItem.premium_protection + " aed " }}
          </li>
        </ul>
        <ul
          class="grid grid-cols-3 gap-2 [&>li]:p-2 [&>li]:flex [&>li]:gap-4 [&>li]:bg-gray-300 [&>li]:items-center [&>li]:justify-center"
        >
          <li>
            <UIcon
              class="w-6 h-6"
              name="material-symbols-light:calendar-month-outline-sharp"
            />
            <p>{{ selectedCarItem.year }}</p>
          </li>
          <li>
            <UIcon class="w-6 h-6" name="ci:timer" />
            <p>{{ selectedCarItem.seconds }}</p>
          </li>
          <li>
            <UIcon class="w-6 h-6" name="material-symbols:speed-outline" />
            <p>{{ selectedCarItem.max_speed }}</p>
          </li>
          <li>
            <UIcon class="w-6 h-6" name="mdi:seat-passenger" />
            <p>{{ selectedCarItem.max_people }}</p>
          </li>
          <li>
            <UIcon class="w-6 h-6" name="ic:outline-color-lens" />
            <p>{{ selectedCarItem.color }}</p>
          </li>
          <li>
            <UIcon class="w-6 h-6" name="tabler:engine" />
            <p>{{ selectedCarItem.motor }}</p>
          </li>
          <li>
            <UIcon class="w-6 h-6" name="solar:transmission-circle-linear" />
            <p>{{ selectedCarItem.transmission }}</p>
          </li>
          <li>
            <UIcon class="w-6 h-6" name="mingcute:four-wheel-drive-line" />
            <p>{{ selectedCarItem.drive_side }}</p>
          </li>
          <li>
            <UIcon class="w-6 h-6" name="lucide:fuel" />
            <p>{{ selectedCarItem.petrol }}</p>
          </li>
          <li>
            <UIcon class="w-6 h-6" name="ph:car" />
            <p>
              {{
                store.category
                  .find((item) => item.id == selectedCarItem.category_id)
                  .name_en.slice(0, 6) + ".."
              }}
            </p>
          </li>
        </ul>
        <form
          class="grid grid-cols-2 gap-3 [&>input]:bg-gray-300 [&>input]:p-3 [&>input]:bg-transparent [&>input]:border-2 border-2 p-3"
        >
          <input placeholder="Name" type="text" required />
          <input placeholder="Phone" type="number" min="8" required />
          <input placeholder="Period" type="text" />
          <input placeholder="Details" type="text" />
          <Button :label="$t('carsinfo.button')" type="submit" />
        </form>
        <div class="grid grid-cols-3 gap-4">
          <NuxtLink
            to="https://api.whatsapp.com/send/?phone=971527030189&text&type=phone_number&app_absent=0"
            class="border-2 p-1 flex items-center justify-center gap-2 hover:bg-orange-500"
            ><UIcon name="nimbus:whatsapp" class="w-6 h-6" />Whats Up</NuxtLink
          >
          <NuxtLink
            to="https://t.me/+971527030189"
            class="border-2 p-1 flex items-center justify-center gap-2 hover:bg-orange-500"
            ><UIcon name="ri:telegram-line" class="w-6 h-6" />Telegram</NuxtLink
          >
          <NuxtLink
            to="tel:+971527030189"
            class="border-2 p-1 flex items-center justify-center gap-2 hover:bg-orange-500"
            ><UIcon
              name="material-symbols:call-outline-rounded"
              class="w-6 h-6"
            />Phone</NuxtLink
          >
        </div>
      </div>
      <p
        v-else
        class="h-[500px] flex justify-center items-center w-full col-span-2"
      >
        <UIcon name="svg-spinners:3-dots-fade" class="w-52 h-52" />
      </p>
      <!-- Yuklanayotgan paytda ko'rsatiladigan xabar -->
    </div>
  </Section>
  <Section :label="$t('carsinfo.title')">
    <main class="w-full grid grid-cols-4 gap-4">
      <div v-for="item in store.carsAll">
        <ChangeCarsCard :item="item" :route="route.params.id" />
      </div>
    </main>
  </Section>
</template>
