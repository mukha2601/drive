<template>
  <Section :label="$t('about.about')">
    <div class="flex flex-col gap-12">
      <ul>
        <li>
          <h1 class="text-2xl">{{ $t("about.title1") }}</h1>
        </li>
        <li>
          <p>{{ $t("about.subtitle1") }}</p>
        </li>
      </ul>

      <ul class="flex flex-col gap-4">
        <li>
          <h1 class="text-2xl">{{ $t("about.title2") }}</h1>
        </li>
        <li>
          <span class="text-xl">{{ $t("about.title3") }}</span>
          {{ $t("about.subtitle3") }}
        </li>
        <li>
          <span class="text-xl">{{ $t("about.title4") }}</span>
          {{ $t("about.subtitle4") }}
        </li>
        <li>
          <span class="text-xl">{{ $t("about.title5") }}</span>
          {{ $t("about.subtitle5") }}
        </li>
        <li>
          <span class="text-xl">{{ $t("about.title6") }}</span>
          {{ $t("about.subtitle6") }}
        </li>
      </ul>

      <ul class="flex flex-col gap-4">
        <li>
          <h1 class="text-xl">{{ $t("about.title7") }}</h1>
          {{ $t("about.subtitle7") }}
        </li>
        <li>
          <h1 class="text-xl">{{ $t("about.title8") }}</h1>
          {{ $t("about.subtitle8") }}
        </li>
      </ul>
    </div>
  </Section>
</template>
