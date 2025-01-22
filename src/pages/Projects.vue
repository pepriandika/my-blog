<script setup>
import Article from '../assets/Articles.json';
import ArticleCard from "@/components/ArticleCard.vue";

const articles = Article.filter(article => article.category === "Portfolio");

</script>

<template>
  <v-container>
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
  </v-container>
</template>


