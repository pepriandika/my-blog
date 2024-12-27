<script setup>
import { useRouter } from 'vue-router';
import ArticleCard from "@/components/ArticleCard.vue"; // Import router hook
import Articles from "@/assets/Articles.json";
import Search from "@/components/sidebar/Search.vue";
import AboutMe from "@/components/sidebar/AboutMe.vue";
import RecentPost from "@/components/sidebar/RecentPost.vue";
import Category from "@/components/sidebar/Category.vue";

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
        <Search/>
        <br/>
        <br/>
        <AboutMe/>
        <br/>
        <br/>
        <RecentPost :title="articles" />
        <br/>
        <br/>
        <Category :category="articles"/>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>

</style>


