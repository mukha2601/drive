<template>
  <div class="w-full flex justify-between border-2 h-[60px] items-center">
    <NuxtImg src="/logo.png" class="w-14 h-14 border-e-2 inset-0 p-2" />
    <div class="nav h-full border-x-2 flex gap-4 px-4 items-center">
      <NuxtLink to="/">CARS</NuxtLink>
      <NuxtLink to="/">BRAND</NuxtLink>
      <NuxtLink to="/">SERVICES</NuxtLink>
      <NuxtLink to="/">ABOUT US</NuxtLink>
      <NuxtLink to="/">CONTACTS</NuxtLink>
      <NuxtLink to="/">BLOG</NuxtLink>
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
