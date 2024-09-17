<template>
  <div class="w-full p-6 border-2 border-t-0">
    <div class="grid grid-cols-3 space-x-6">
      <ul class="flex flex-col justify-between gap-7">
        <li>
          <NuxtLink to="/">
            <NuxtImg src="/logo.png" class="w-14 h-14 inset-0" />
          </NuxtLink>
        </li>
        <li class="text-xl">{{ $t("footer.title") }}</li>
        <li class="text-sm max-w-80">{{ $t("footer.subtitle") }}</li>
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
      <ul class="flex flex-col justify-between text-sm">
        <li>
          <NuxtLink to="/cars" class="text-xl font-bold">{{
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
      <ul class="flex flex-col justify-between text-sm">
        <li>
          <NuxtLink to="/blog" class="text-xl font-bold">{{
            $t("footer.brands").toLocaleUpperCase()
          }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/service" class="text-xl font-bold">{{
            $t("footer.services").toLocaleUpperCase()
          }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contacts" class="text-xl font-bold">{{
            $t("footer.contacts").toLocaleUpperCase()
          }}</NuxtLink>
          <p class="text-[12px] max-w-80">
            Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates +971 52
            7030189 Working hours: 24/7
          </p>
        </li>
        <li class="flex flex-col gap-2">
          <NuxtLink to="/about" class="text-xl font-bold">{{
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
    <div class="flex justify-between mt-4 pt-2 border-t-2 text-sm">
      <p>{{ $t("footer.terms1") }}</p>
      <NuxtLink to="/terms-and-conditions">{{ $t("footer.terms2") }}</NuxtLink>
    </div>
  </div>
</template>
