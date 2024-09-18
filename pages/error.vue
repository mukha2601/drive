<template>
  <div class="error-page">
    <h1>{{ error.statusCode }} - Sahifa topilmadi</h1>
    <p>{{ error.message }}</p>
    <NuxtLink to="/">Bosh sahifaga qaytish</NuxtLink>
  </div>
</template>

<script setup>
const error = useError();
</script>

<style scoped>
.error-page {
  text-align: center;
  padding: 100px;
}
</style>
