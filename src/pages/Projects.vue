<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.back(); // Kembali ke halaman sebelumnya
};
</script>

<template>
  <div>
    <h1>Projects Page</h1>
    <p>Ini adalah halaman Projects.</p>
    <button @click="goBack">Kembali ke Home</button>
  </div>
</template>


