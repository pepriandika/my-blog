<template>
  <div>
    <h1>Home Page</h1>
    <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p> <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p> <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p> <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p>
    <p>Selamat datang di halaman utama!</p>



    <button @click="navigateToAbout">Ke Halaman About</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'; // Import router hook

export default {
  setup() {
    const router = useRouter();

    const navigateToAbout = () => {
      router.push('/about'); // Navigasi ke halaman lain
    };

    return {
      navigateToAbout,
    };
  },
};
</script>
