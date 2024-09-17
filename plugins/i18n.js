import { createI18n } from "vue-i18n";
// import en from "~/locales/en.js";
// import ru from "~/locales/ru.js";

// const messages = {
//   en: {
//     header: {
//       cars: "cars",
//       brands: "brands",
//       services: "services",
//       about: "about us",
//       contacts: "contacts",
//       blog: "blog",
//     },
//   },
//   ru: {
//     header: {
//       cars: "машины",
//       brands: "бренды",
//       services: "услуги",
//       about: "о нас",
//       contacts: "контакты",
//       blog: "блог",
//     },
//   },
// };

const i18n = createI18n({
  lazy: true,
  langDir: "locales",
  strategy: "no_prefix",
  locales: [
    {
      code: "en",
      iso: "en",
      name: "en",
      file: "en.js",
    },
    {
      code: "ru",
      iso: "ru",
      name: "ru",
      file: "ru.js",
    },
  ],
  defaultLocale: "ru",
});
// const i18n = createI18n({
//   legacy: false,
//   locale: "en", // Boshida ingliz tili
//   fallbackLocale: "en", // Agar tarjima topilmasa, ingliz tili qo'llaniladi
//   messages: {
//     en,
//     ru,
//   }, // Tarjima xabarlarini ulaymiz
// });

export default i18n;
