<template>
  <div
    class="w-full flex justify-between border-2 h-[60px] items-center sticky top-0 z-30 shadow-xl bg-[#e3e4e6]"
  >
    <NuxtLink to="/" class="flex gap-4 items-center">
      <div
        class="bg-orange-500 h-14 px-3 inset-0 flex justify-center items-center border-e-2"
      >
        <UIcon
          name="arcticons:dsdrive"
          class="w-8 h-8 text-white font-bolder"
        />
        <p class="text-2xl text-white max-[400px]:hidden">Drive</p>
      </div>
    </NuxtLink>
    <nav
      class="max-[1100px]:hidden h-full border-x-2 flex gap-4 px-4 items-center"
    >
      <NuxtLink class="hover:text-orange-500" to="/cars">
        {{ $t("header.cars").toUpperCase() }}
      </NuxtLink>
      <NuxtLink class="hover:text-orange-500" to="/">
        {{ $t("header.brands").toUpperCase() }}
      </NuxtLink>
      <NuxtLink class="hover:text-orange-500" to="/service">
        {{ $t("header.services").toUpperCase() }}
      </NuxtLink>
      <NuxtLink class="hover:text-orange-500" to="/about">
        {{ $t("header.about").toUpperCase() }}
      </NuxtLink>
      <NuxtLink class="hover:text-orange-500" to="/contacts">
        {{ $t("header.contacts").toUpperCase() }}
      </NuxtLink>
      <NuxtLink class="hover:text-orange-500" to="/blog">
        {{ $t("header.blog").toUpperCase() }}
      </NuxtLink>
    </nav>

    <div class="flex h-full border-s-2">
      <div class="lang flex border-e-2">
        <button
          class="h-full px-4 border-e-2 hover:bg-orange-500"
          @click="language = 'ru'"
        >
          RU
        </button>
        <button
          class="h-full px-4 hover:bg-orange-500"
          @click="language = 'en'"
        >
          EN
        </button>
        
      </div>
      <button
        class="h-full px-4 hover:bg-orange-500 flex justify-center items-center"
      >
        <UIcon name="material-symbols:dark-mode-outline-rounded" class="w-6 h-6" />
      </button>
      <div class="search p-2 max-[600px]:hidden border-s-2">
        <input
          type="text"
          class="h-full bg-transparent border-2 ps-2 border-gray-400 outline-none focus:border-orange-500"
          placeholder="search"
        />
      </div>
      <button
        class="h-full px-4 hover:bg-orange-500 flex justify-center items-center border-s-2 min-[1000px]:hidden"
      >
        <UIcon name="material-symbols:menu" class="w-8 h-8" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
// I18n hookini olamiz
const { locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>
