<script setup>
  import Footer from './components/Footer.vue';
  import Header from './components/Header.vue';
</script>

<template>
  <div id="app">
    <Header/>
    <main>
      <router-view />
    </main>
    <Footer/>
  </div>
</template>

<style scoped>
/* General Styling */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}

/* Main Content Styling */
main {
  flex: 1; /* Membuat main mengambil ruang yang tersisa */
  padding: 2rem;
  background-color: #d6e2ed;
}
</style>
