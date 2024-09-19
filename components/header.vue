<template>
  <div
    class="w-full flex justify-between border-2 h-[60px] items-center sticky top-0 z-30 shadow-xl bg-[#e3e4e6]"
  >
    <NuxtLink to="/" class="flex gap-4 items-center">
      <div
        class="bg-orange-500 h-[58px] px-3 inset-0 flex justify-center items-center border-e-2"
      >
        <UIcon
          name="arcticons:dsdrive"
          class="w-8 h-8 text-white font-bolder"
        />
        <p class="text-2xl text-white max-[400px]:hidden">Drive</p>
      </div>
    </NuxtLink>
    <nav
      class="max-[950px]:hidden h-full border-x-2 flex gap-4 px-4 items-center"
    >
      <NuxtLink class="hover:text-orange-500" to="/cars">
        {{ $t("header.cars").toUpperCase() }}
      </NuxtLink>
      <NuxtLink class="hover:text-orange-500" to="/brands">
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

      <UPopover :popper="{ placement: 'top-end' }" overlay>
        <button
          class="h-[58px] px-4 hover:bg-orange-500 flex justify-center items-center"
        >
          <!-- <UIcon
            name="material-symbols:dark-mode-outline-rounded"
            class="w-6 h-6"
          /> -->
          <UIcon name="ic:outline-search" class="w-6 h-6" />
        </button>

        <template #panel="{ close }">
          <div class="p-4 bg-white">
            <input
              type="text"
              class="h-full w-full bg-transparent border-2 p-2 border-gray-400 outline-none focus:border-orange-500"
              placeholder="search"
              v-model="selected"
            />

            <ul
              v-if="selected && filteredResults.length"
              class="mt-4 flex flex-col gap-3 overflow-y-scroll max-h-80"
            >
              <li
                v-for="item in filteredResults"
                :key="item.id"
                class="hover:text-orange-500"
              >
                <NuxtLink @click="close" :to="`/carsinfo/${item.id}`">
                  {{ item.brand }} - {{ item.model }}
                </NuxtLink>
              </li>
            </ul>

            <!-- Agar natijalar bo'lmasa va searchQuery bo'sh bo'lmasa, xabar ko'rsatadi -->
            <p v-else-if="selected" class="mt-4 opacity-40">
              Kiritilgan qiymatga mos natija topilmadi
            </p>
          </div>
        </template>
      </UPopover>

      <UPopover overlay>
        <button
          class="h-[58px] px-4 hover:bg-orange-500 flex justify-center items-center border-s-2 min-[950px]:hidden"
        >
          <UIcon name="material-symbols:menu" class="w-8 h-8" />
        </button>

        <template #panel="{ close }">
          <div class="p-4 bg-white">
            <nav class="h-full flex flex-col gap-4 px-4 items-center">
              <NuxtLink
                @click="close()"
                class="hover:text-orange-500"
                to="/cars"
              >
                {{ $t("header.cars").toUpperCase() }}
              </NuxtLink>
              <NuxtLink
                @click="close()"
                class="hover:text-orange-500"
                to="/brands"
              >
                {{ $t("header.brands").toUpperCase() }}
              </NuxtLink>
              <NuxtLink
                @click="close()"
                class="hover:text-orange-500"
                to="/service"
              >
                {{ $t("header.services").toUpperCase() }}
              </NuxtLink>
              <NuxtLink
                @click="close()"
                class="hover:text-orange-500"
                to="/about"
              >
                {{ $t("header.about").toUpperCase() }}
              </NuxtLink>
              <NuxtLink
                @click="close()"
                class="hover:text-orange-500"
                to="/contacts"
              >
                {{ $t("header.contacts").toUpperCase() }}
              </NuxtLink>
              <NuxtLink
                @click="close()"
                class="hover:text-orange-500"
                to="/blog"
              >
                {{ $t("header.blog").toUpperCase() }}
              </NuxtLink>
            </nav>
          </div>
        </template>
      </UPopover>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/store";
const store = useStore();
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();

// const disableScroll = () => {
//   document.body.style.overflow = "hidden";
// };

// const enableScroll = () => {
//   document.body.style.overflow = "";
// };

const selected = ref("");
const filteredResults = computed(() => {
  return store.search.filter(
    (item) =>
      item.brand.toLowerCase().includes(selected.value.toLowerCase()) ||
      item.model.toLowerCase().includes(selected.value.toLowerCase())
  );
});

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>
