<script setup>
import { useRouter } from 'vue-router';

const router=useRouter();

const goContact=() => {
  router.push('/contact');
};
</script>

<template>
  <v-container>
    <v-row class="justify-space-around">
      <v-col
        align-self="center"
        :cols="6"
      >
        <h1>Hai! Saya <span style="background-color: #4a8d9e; color: white;"> Pepri Andika </span><br /> Saya Adalah
          Front End Developer</h1>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut corporis doloremque, eaque eum
          exercitationem id illo in iusto laboriosam laborum libero neque, nobis quae repudiandae sit velit voluptatem
          voluptatum!</p>
        <button @click="goContact">Kembali ke Home</button>
      </v-col>
      <v-col class="about-photo ">
        <div class="border-photo"><img
            src="../assets/peps-ton.png"
            alt="My Photo"
            class="my-photo"
            width="638"
            height="784"
          ></div>
      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped>
.about-photo {
  flex-grow: 0;
}

.border-photo {
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.my-photo {
  position: absolute;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  transition: all 0.1s ease-in-out;
  opacity: 70%;
}

.my-photo:hover {
  width: 400px;
  height: 400px;
}
</style>
