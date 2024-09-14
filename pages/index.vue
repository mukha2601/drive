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

const onSwiper = (swiperInstance) => {
  swiper = swiperInstance;
};

const prevSlide = () => {
  console.log("Prev button clicked");
  console.log(swiper);
  if (swiper) {
    swiper.slidePrev();
  }
};

const nextSlide = () => {
  console.log("Next button clicked");
  if (swiper) {
    swiper.slideNext();
  }
};

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
  <section id="hero" class="w-full border-2 border-t-0 shadow-2xl">
    <div class="grid grid-cols-3 h-full grid-rows-1">
      <div
        class="left w-full border-e-2 h-full flex flex-col justify-between gap-6 p-4"
      >
        <h1 class="text-[62px]">TOP LUXURY CAR RENTAL DUBAI</h1>
        <p class="text-[20px] font-thin">
          Best sports car & supercar rental Dubai, Exclusive offers on luxury
          car rental Dubai Cheap price
        </p>
        <Button label="RENT A CAR DUBAI CATALOG" />
      </div>
      <div class="right col-span-2 h-full p-4 relative">
        <div
          class="circle w-96 h-96 bg-orange-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
    <div v-for="element in titles">
      <ChangeCarsBox :label="element.title" :item="element.item" />
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
      <div class="w-1/2 flex flex-col gap-4">
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
        <button>all cars</button>
      </div>
    </div>
  </Section>
  <Section :label="'faq'">
    <UAccordion
      color="white"
      variant="outline"
      size="xl"
      :items="[
        {
          label:
            'What is the minimum age requirements to rent a car in Dubai ?',
          content:
            'Drivers under 25 must have a license for a minimum of three years. The same applies for the person(s) whose name(s) is/are mentioned as additional driver.',
        },
        {
          label: 'What do you need for a luxury car rental in Dubai ?',
          content:
            'Drivers shall be required to have a valid drivers license and Passport copy.',
        },
        {
          label: 'How much is the Insurance limit on luxury car rental Dubai?',
          content:
            'Includes an overall Motor Vehicle Insurance. 3000-5000 AED for Excess Luxury Cars. 7000-10000 AED for Sports Cars',
        },
        {
          label:
            'What are the driving licenses that can be used in Arab countries ?',
          content:
            'Local driving license for UAE citizens. International driving licenses issued by the following countries: 1. Kingdom of Saudi Arabia, 2. Egypt, 3. Bahrain, 4. Jordan, 5. Kuwait, 6. Tunisia, 7. Sultanate of Oman, 8. Algeria, 9. Qatar, 10. Morocco, 11. Sudan, 12. Somalia, 13. Palestine, 14. Lebanon, 15. Libya, 16. Syria, 17 Yemen, 18. Iraq, 19. Djibouti, 20. Comoros, 21. Mauritania.',
        },
        {
          label: 'Can anyone else drive the car i rent?',
          content:
            'The contract prescribes two drivers, but at the time of filling out the contract, you must provide a drivers license and passport',
        },
      ]"
    />
  </Section>
</template>
