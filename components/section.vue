<template>
  <div class="brands border-2 border-t-0 p-4 md:p-6 flex flex-col gap-6 shadow-xl">
    <h1 v-if="label" class="text-2xl md:text-4xl">{{ label.toUpperCase() }}</h1>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: false,
  },
});
</script>
