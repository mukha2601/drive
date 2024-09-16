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
          <p class="text-2xl text-white">Drive</p>
      </div>
    </NuxtLink>
    <div class="nav h-full border-x-2 flex gap-4 px-4 items-center">
      <NuxtLink class="hover:text-orange-500" to="/cars">CARS</NuxtLink>
      <NuxtLink class="hover:text-orange-500" to="/">BRAND</NuxtLink>
      <NuxtLink class="hover:text-orange-500" to="/service">SERVICES</NuxtLink>
      <NuxtLink class="hover:text-orange-500" to="/about">ABOUT US</NuxtLink>
      <NuxtLink class="hover:text-orange-500" to="/contacts">CONTACTS</NuxtLink>
      <NuxtLink class="hover:text-orange-500" to="/blog">BLOG</NuxtLink>
    </div>

    <div class="flex h-full border-s-2">
      <div class="lang flex border-e-2">
        <button class="h-full px-4 border-e-2 hover:bg-orange-500">RU</button>
        <button class="h-full px-4 hover:bg-orange-500">UZ</button>
      </div>
      <div class="search p-2">
        <input
          type="text"
          class="h-full bg-transparent border-2 ps-2 border-gray-400 outline-none focus:border-orange-500"
          placeholder="search"
        />
      </div>
    </div>
  </div>
</template>
