<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goContact = () => {
  router.push('/contact'); // Kembali ke halaman sebelumnya
};
</script>

<template>

  <v-container>
    <v-row>
      <v-col>
        <h1>Hai! Saya Pepri Andika <br/> Saya Adalah Front End Developer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut corporis doloremque, eaque eum exercitationem id illo in iusto laboriosam laborum libero neque, nobis quae repudiandae sit velit voluptatem voluptatum!</p>
        <button @click="goContact">Kembali ke Home</button>
      </v-col>

      <v-col :cols="4" class="about-photo border-b">
        <img src="@/assets/logo.png" alt="My Photo" srcset="">
      </v-col>
    </v-row>

  </v-container>

</template>


