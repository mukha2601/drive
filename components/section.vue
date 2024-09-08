<template>
  <div class="brands border-2 border-t-0 p-6 flex flex-col gap-6">
    <h1 class="text-4xl">{{ label }}</h1>
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
