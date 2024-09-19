<template>
  <div class="max-w-[1300px] mx-auto">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useStore } from "@/store";
const store = useStore();

onMounted(async () => {
  try {
    const carResponse = await fetch("https://realauto.limsa.uz/api/cars");
    const cars = await carResponse.json();
    store.carsAll = cars.data;
    store.filter = cars.data;
    store.search = store.carsAll.map((item) => ({
      id: item.id,
      brand: item.brand.title,
      model: item.model.name,
    }));

    // Fetching brands
    const brandsResponse = await fetch("https://realauto.limsa.uz/api/brands/");
    const brands = await brandsResponse.json();
    store.brands = brands.data;

    // Fetching cars
    const carsResponse = await fetch(
      "https://realauto.limsa.uz/api/categories"
    );
    const category = await carsResponse.json();
    console.log(category);

    store.category = category.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

useHead({
  title: "Drive",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      content:
        "Bu saytda siz o'zingiz yoqtirgan moshinani ijaraga olib haydashingiz mumkin!",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/logo.ico" }],
});

useSeoMeta({
  ogTitle: "Drive",
  ogDescription:
    "Bu saytda siz o'zingiz yoqtirgan moshinani ijaraga olib haydashingiz mumkin!",
  // ogImage: "https://www.gally.uz/logo.ico",
  ogUrl: "https://www.drive.uz/",
  ogType: "website",
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap");

* {
  border-color: rgb(187, 186, 186);
  color: black;
  scroll-behavior: smooth;
  /* border: none; */
}

body {
  background-color: #e3e4e6;
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}

::-webkit-scrollbar {
  width: 0.4rem;
  background-color: rgb(75, 75, 75);
}

::-webkit-scrollbar-thumb {
  background: rgb(167, 167, 167);
}
</style>
