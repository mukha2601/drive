<template>
  <div class="w-full p-4 md:p-6 border-2 border-t-0">
    <div class="grid max-[500px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-4">
      <ul
        class="flex flex-col justify-between gap-7 max-[500px]:col-span-1 max-md:col-span-2"
      >
        <li>
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
        </li>
        <li class="text-md md:text-xl">{{ $t("footer.title") }}</li>
        <li class="text-sm max-w-80 font-thin">{{ $t("footer.subtitle") }}</li>
        <li><Button :label="$t('footer.button')" /></li>
        <li class="flex flex-col">
          <h1 class="text-xl font-bold">
            {{ $t("footer.followUs").toLocaleUpperCase() }}
          </h1>
          <div class="flex gap-4">
            <UButton
              icon="ri:instagram-fill"
              variant="link"
              to="https://www.instagram.com/autozoomrental/"
            />
            <UButton
              icon="akar-icons:facebook-fill"
              variant="link"
              to="https://www.instagram.com/autozoomrental/"
            />
            <UButton
              icon="ion:logo-youtube"
              variant="link"
              to="https://www.instagram.com/autozoomrental/"
            />
          </div>
        </li>
      </ul>
      <ul class="flex flex-col justify-between gap-4 text-sm [&>li]:font-thin">
        <li>
          <NuxtLink to="/cars" class="text-sm md:text-xl font-bold">{{
            $t("footer.cars").toLocaleUpperCase()
          }}</NuxtLink>
        </li>
        <li><NuxtLink to="/cars">SUV</NuxtLink></li>
        <li>
          <NuxtLink to="/cars">{{
            $t("footer.sports").toLocaleUpperCase()
          }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/cars">{{
            $t("footer.luxury").toLocaleUpperCase()
          }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/cars">{{
            $t("footer.convertible").toLocaleUpperCase()
          }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/cars">{{
            $t("footer.budget").toLocaleUpperCase()
          }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/cars">{{
            $t("footer.american").toLocaleUpperCase()
          }}</NuxtLink>
        </li>
        <li><NuxtLink to="/cars">Muscle</NuxtLink></li>
      </ul>
      <ul class="flex flex-col justify-between gap-4 text-sm [&>li]:font-thin">
        <li>
          <NuxtLink to="/blog" class="text-sm md:text-xl font-bold">{{
            $t("footer.brands").toLocaleUpperCase()
          }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/service" class="text-sm md:text-xl font-bold">{{
            $t("footer.services").toLocaleUpperCase()
          }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contacts" class="text-sm md:text-xl font-bold">{{
            $t("footer.contacts").toLocaleUpperCase()
          }}</NuxtLink>
          <p class="text-sm md:text-[12px] max-w-80">
            Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates +971 52
            7030189 Working hours: 24/7
          </p>
        </li>
        <li class="flex flex-col gap-2">
          <NuxtLink to="/about" class="text-sm md:text-xl font-bold">{{
            $t("footer.about").toLocaleUpperCase()
          }}</NuxtLink>
          <NuxtLink to="/" class="text-sm font-bold">{{
            $t("footer.ourTeam").toLocaleUpperCase()
          }}</NuxtLink>
          <NuxtLink to="/faq" class="text-sm font-bold">FAQ</NuxtLink>
        </li>
      </ul>
      <ul></ul>
    </div>
    <div
      class="grid max-[500px]:grid-cols-1 grid-cols-2 gap-6 justify-between mt-4 pt-2 border-t-2 text-sm"
    >
      <p>{{ $t("footer.terms1") }}</p>
      <NuxtLink
        class="flex min-[500px]:justify-end"
        to="/terms-and-conditions"
        >{{ $t("footer.terms2") }}</NuxtLink
      >
    </div>
  </div>
</template>
