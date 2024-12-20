<script setup>
import BorderLabel from "@/components/sidebar/BorderLabel.vue";
</script>

<template>
  <BorderLabel msg="About Me">
    <div>
      <img src="@/assets/logo.png" class="circular-img" alt="Pepri" width="50" height="50">
      <h3>Pepri Andika</h3>
      <p>Freelance Programmer</p>
    </div>

  </BorderLabel>
</template>

<style scoped>
.circular-img {
  border-radius: 50%; /* Membuat gambar menjadi lingkaran */
  display: inline-block;     /* Opsional: untuk menghindari margin bawaan */
}
</style>
