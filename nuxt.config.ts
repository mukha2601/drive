export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@pinia/nuxt",
    "nuxt-swiper",
    "@nuxtjs/i18n",
  ],
  css: ["swiper/swiper-bundle.css", "swiper/css/grid"],
  plugins: ["~/plugins/i18n.js"],
  // i18n: {
  //   lazy: true,
  //   langDir: "locales",
  //   strategy: "no_prefix",
  //   locales: [
  //     {
  //       code: "en",
  //       iso: "en",
  //       name: "en",
  //       file: "en.js",
  //     },
  //     {
  //       code: "ru",
  //       iso: "ru",
  //       name: "ru",
  //       file: "ru.js",
  //     },
  //   ],
  //   defaultLocale: "ru",
  // },

  runtimeConfig: {
    public: {
      VITE_IMGURL: process.env.VITE_IMGURL,
    },
  },
});
