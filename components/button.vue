<template>
  <div>
    <button
      type="button"
      class="flex gap-4 items-center border-2 px-2 md:px-4 py-1 hover:bg-orange-500 active:bg-orange-500"
    >
      <p class="text-xs md:text-md lg:text-lg">{{ label }}</p>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
});
</script>
