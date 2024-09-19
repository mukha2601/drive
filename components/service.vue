<template>
  <Section :label="$t('services.title')">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div
        class="flex flex-col justify-between gap-4 p-2 md:p-4 border-2 w-full"
      >
        <NuxtImg
          src="https://autozoomrental.com/static/media/sercardimg1.40892caaec9bfa3d404a.jpg"
          class="w-full"
        />
        <h1 class="text-sm sm:text-lg md:text-xl">
          {{ $t("services.card1.title") }}
        </h1>
        <p class="text-xs md:text-lg font-thin">
          {{ $t("services.card1.subtitle") }}
        </p>
        <NuxtLink to="/service/sport-car-rent">
          <Button :label="$t('services.card1.button')" />
        </NuxtLink>
      </div>
      <div
        class="flex flex-col justify-between gap-4 p-2 md:p-4 border-2 w-full"
      >
        <NuxtImg
          src="https://autozoomrental.com/static/media/sercardiimg2.79fb9209cbfcc61c8c65.jpg"
          class="w-full"
        />
        <h1 class="text-sm sm:text-lg md:text-xl">
          {{ $t("services.card2.title") }}
        </h1>
        <p class="text-xs md:text-lg font-thin">
          {{ $t("services.card2.subtitle") }}
        </p>
        <NuxtLink to="/service/photoshoot">
          <Button :label="$t('services.card2.button')" />
        </NuxtLink>
      </div>
    </div>
  </Section>
</template>
