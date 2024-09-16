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
console.log(category);


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

// const titles = [
//   {
//     title: "BUDGET CARS",
//     item: store.budgetCars,
//   },
//   {
//     title: "SPORT CARS",
//     item: store.sportCars,
//   },
//   {
//     title: "LUXURY CARS",
//     item: store.luxuryCars,
//   },
//   {
//     title: "MUSCLE CARS",
//     item: store.muscleCars,
//   },
//   {
//     title: "CONVERTIBLE CARS",
//     item: store.convertibleCars,
//   },
//   {
//     title: "SUV CARS",
//     item: store.suvCars,
//   },
//   {
//     title: "AMERICAN BRANDS",
//     item: store.americanCars,
//   },
// ];
</script>

<template>
  <section id="hero" class="w-full border-2 border-t-0 shadow-2xl">
    <div class="grid grid-cols-3 h-full grid-rows-1">
      <div
        class="left w-full border-e-2 h-full flex flex-col justify-between gap-6 p-6"
      >
        <h1 class="text-[58px]">TOP LUXURY CAR RENTAL DUBAI</h1>
        <p class="text-[20px] font-thin">
          Best sports car & supercar rental Dubai, Exclusive offers on luxury
          car rental Dubai Cheap price
        </p>
        <Button label="RENT A CAR DUBAI CATALOG" />
      </div>
      <div class="right col-span-2 h-full p-4 relative">
        <div
          class="w-80 h-full bg-orange-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
          <SwiperSlide :zoom="true" v-for="item in store.luxuryCars">
            <NuxtImg
              class="w-[500px]"
              :src="
                imgUrl +
                  item.car_images.find((image) => image.is_main)?.image.src ||
                item.car_images[0].image.src
              "
            />
          </SwiperSlide>
        </Swiper>
        <div class="absolute bottom-4 right-4 flex gap-4 z-10">
          <Button label="prev" @click="prevSlide" />
          <Button label="next" @click="nextSlide" />
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
      <h1 class="text-4xl">LUXURY CAR RENTAL IN DUBAI</h1>
      <p>
        Are you ready to feel the adrenaline rush and unleash your inner speed
        demon? Look no further than Auto Zoom luxury car rental Dubai, the city
        where dreams become reality. In this ultimate guide to sports car rental
        Dubai, we will take you on a thrilling journey through the world of
        luxury and supercar rental Dubai. Imagine cruising down the iconic
        Sheikh Zayed Road in a sleek and powerful sports car rental Dubai style,
        turning heads and leaving everyone in awe of your style. Whether you are
        a car enthusiast or simply looking to
      </p>
    </div>
    <div class="flex flex-col gap-4 mt-4">
      <h1 class="text-4xl">
        What are the requirements to rent a luxury car in Dubai?
      </h1>
      <p>
        To rent a car Dubai, it's enough to have a valid driving license and
        enough funds. & you'll need to show your foreign passport and prove that
        you have come of age and have driving experience.The age limit and the
        requirements for the license depend on where you're from. Visitors from
        Europe, the UK, the US and the Middle East can drive with their national
        licenses. People from other parts of the world need an international
        license. The age limit for the driver might vary from 21 to 25 years.
        Please get in touch with us before placing an order to discuss your
        individual situation.Cars in the UAE have steering wheels on the left
        side. Drivers stick to the right side of the road.If needed, you can add
        a second driver to your rental contract. The requirements for this
        person will be the same as for the first driver. If you let someone who
        isn't mentioned in your rental contract take a place behind the wheel,
        you can get a fine.The duration of a premium car rental in Dubai can
        vary from one day to several weeks. Discounts are common for luxury car
        rental Dubai monthly car rental plan. Use this chance to have fun,
        increase your high social status and please your dearest and
        nearest!Please avoid smoking inside the rented vehicle.
      </p>
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
        <h1 class="text-4xl">SPORTS CAR RENTAL DUBAI</h1>
        <p>
          Auto Zoom L L C a Car is a Top Luxury Car Rental Dubai based company,
          We offer sports car rental, and supercar rental in Dubai. The best
          luxury car rental process provided by our fleet . We own a diverse
          range of luxury supercar rental and sports car rental Dubai style ,
          including Rolls Royce, Lamborghini, Maserati, Ferrari, Mercedes Benz,
          Porsche, and Range Rover, to name a few. Rent a car with the best car
          rental company in Dubai.
        </p>
        <NuxtLink to="/cars">
          <Button label="All Cars" />
        </NuxtLink>
      </div>
    </div>
  </Section>
  <Faq />
</template>
