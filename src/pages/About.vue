<template>
  <div>
    <h1>About Page</h1>
    <p>Ini adalah halaman tentang.</p>
    <button @click="goBack">Kembali ke Home</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const goBack = () => {
      router.back(); // Kembali ke halaman sebelumnya
    };

    return {
      goBack,
    };
  },
};
</script>
