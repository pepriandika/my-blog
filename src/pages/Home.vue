<script setup>
import { useRouter } from 'vue-router';
import ArticleCard from "@/components/ArticleCard.vue"; // Import router hook
import Articles from "@/assets/Articles.json";

const articles = Articles;

const router = useRouter();

const navigateToPost = (id) => {
  router.push(`/post/${id}`); // Navigasi ke halaman lain
};

</script>

<template>
  <div>
    <v-row no-gutters>
      <v-col cols="9">
        <ArticleCard
            v-for="article in articles"
            :key="article.id"
            :image-src="article.imageSrc"
            :title="article.title"
            :author="article.author"
            :date="article.date"
            :category="article.category"
            :description="article.description"
            :id="article.id"
            @click="navigateToPost(article.id)"
        />
      </v-col>
      <v-col cols="3">
        tes
      </v-col>
    </v-row>
  </div>
</template>


