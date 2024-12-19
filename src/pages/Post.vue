<script setup>
import { useRoute } from "vue-router";
import Articles from "@/assets/Articles.json";

const article = Articles;

const route = useRoute();

const postId = route.params.id;

const content = article[parseInt(postId) -1 ].contentFile
</script>

<template>
  <div>
    <v-row no-gutters>
      <v-col cols="9">
        <div>
          <h1> Post {{ postId }}</h1>
          <div v-html="content"></div>
        </div>
      </v-col>
      <v-col cols="3">

      </v-col>
    </v-row>
  </div>


</template>

<style scoped>

</style>
