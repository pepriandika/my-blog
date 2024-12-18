<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.back(); // Kembali ke halaman sebelumnya
};
</script>

<template>
  <div>
    <h1>Blog Page</h1>
    <p>Ini adalah halaman Blog.</p>
    <button @click="goBack">Kembali ke Blog</button>
  </div>
</template>


