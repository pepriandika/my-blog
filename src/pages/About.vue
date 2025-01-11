<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goContact = () => {
  router.push('/contact'); // Kembali ke halaman sebelumnya
};
</script>

<template>
  <v-container>
    <v-row class="justify-space-around">
      <v-col align-self="center" :cols="6">
        <h1>Hai! Saya <span style="background-color: #4a8d9e; color: white;"> Pepri Andika </span><br/> Saya Adalah Front End Developer</h1>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut corporis doloremque, eaque eum exercitationem id illo in iusto laboriosam laborum libero neque, nobis quae repudiandae sit velit voluptatem voluptatum!</p>
        <button @click="goContact">Kembali ke Home</button>
      </v-col>

      <v-col class="about-photo ">
        <div class="border-photo"><img src="../assets/peps-ton.png" alt="My Photo" class="my-photo" width="638" height="784"></div>

      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped>
  .about-photo{
    flex-grow: 0;
    border-radius: 2px!important;
    border-color: #4a8d9e;
  }

  .my-photo{
    border-radius: 50%;
    border: 2px #1a1e1e;
    width: 300px;
    height: auto;
  }

  .my-photo:hover{

  }
</style>
