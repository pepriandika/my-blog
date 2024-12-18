<script setup>
import { useRoute } from "vue-router";
import Articles from "@/assets/Articles.json";

const article = Articles;

const route = useRoute();

const postId = route.params.id;

const content = article[parseInt(postId)].contentFile
</script>

<template>
  <div>
    <h1> Post {{ postId }}</h1>
    <p>{{content}}</p>
  </div>
</template>

<style scoped>

</style>
1042
