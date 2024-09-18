<template>
  <Section :label="$t('terms.title1')">
    <div class="flex flex-col gap-4">
      <p>{{ $t("terms.subtitle1") }}</p>
      <ul class="flex flex-col gap-4">
        <li class="text-xl">{{ $t("terms.title2") }}</li>
        <li>{{ $t("terms.subtitle2") }}</li>
      </ul>
      <ul class="flex flex-col gap-4">
        <li class="text-xl">{{ $t("terms.title3") }}</li>
        <li>{{ $t("terms.subtitle3") }}</li>
      </ul>
      <ul class="flex flex-col gap-4">
        <li class="text-xl">{{ $t("terms.title4") }}</li>
        <li>{{ $t("terms.subtitle4") }}</li>
      </ul>
      <ul class="flex flex-col gap-4">
        <li class="text-xl">{{ $t("terms.title5") }}</li>
        <li>{{ $t("terms.subtitle5") }}</li>
      </ul>
      <ul class="flex flex-col gap-4">
        <li class="text-xl">{{ $t("terms.title6") }}</li>
        <li>{{ $t("terms.subtitle6") }}</li>
      </ul>
    </div>
  </Section>
</template>
