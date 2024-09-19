<template>
  <Section :label="$t('brands.title')" >
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
      <BrandCard v-for="item in store.brands" :key="item.id" :brands="item" />
    </div>
  </Section>
</template>

<script setup>
import { useStore } from "@/store";
const store = useStore();
</script>
