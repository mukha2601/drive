<template>
  <div>
    <button type="button" class="flex gap-4 items-center border-2 px-4 py-1 hover:bg-orange-500">
      <p>{{ label }}</p>
      <!-- <UIcon :name="icon" class="w-12 h-12" /> -->
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
