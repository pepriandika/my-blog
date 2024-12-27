<script setup>
import BorderLabel from "@/components/sidebar/BorderLabel.vue";
</script>

<template>
  <BorderLabel msg="About Me">
    <div class="head">
      <img src="@/assets/logo.png" class="circular-img" alt="Pepri" width="50" height="50">
      <p class="name"><strong>Pepri Andika</strong><br/>Fouder & Editor</p>
    </div>
    <br/>
    <p>Halo! Nama saya Pepri Andika, bekerja dari Palembang.
      <i>InsyaAllah</i>, Saya akan berbagi pengalaman pribadi, hasil belajar,
      dan proyek-proyek sederhana dalam dunia programming.</p>
  </BorderLabel>
</template>

<style scoped>
.head{
  display: flex;
}
.circular-img {
  border-radius: 50%; 
  display: inline-block;    
}

div .name{
  display: inline;
  margin-left: 10px;
}

</style>
