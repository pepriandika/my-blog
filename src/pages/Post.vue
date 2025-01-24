<script setup>
import { useRoute } from "vue-router";
import Articles from "@/assets/Articles.json";
import AboutMe from "@/components/sidebar/AboutMe.vue";
import DOMPurify from "dompurify";
import { computed, ref, onMounted, nextTick } from "vue";

const article = Articles;

const route = useRoute();

const postId = route.params.id;

const currentArticle = computed(() => article[parseInt(postId) - 1]);
const content = computed(() => currentArticle.value?.contentFile || "");

const sanitizedContent = computed(() => DOMPurify.sanitize(content.value));

const isLoading = ref(true);

onMounted(async () => {
  // Simulasi loading
  await nextTick();
  isLoading.value = false;
});
</script>

<template>
  <v-container>
    <v-row v-if="isLoading">
      <v-col>
        <v-skeleton-loader type="article" />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" md="9">
        <div class="post-content">
          <h1 class="post-title">{{ article[parseInt(postId) - 1].title }}</h1>
          <div class="post-meta">
            <span class="author"
              >By {{ article[parseInt(postId) - 1].author }}</span
            >
            <span class="date">{{ article[parseInt(postId) - 1].date }}</span>
            <span class="category">{{
              article[parseInt(postId) - 1].category
            }}</span>
          </div>
          <div class="post-image">
            <img
              :src="article[parseInt(postId) - 1].imageSrc"
              :alt="article[parseInt(postId) - 1].title"
            />
          </div>
          <div class="post-body" v-html="sanitizedContent"></div>
        </div>
      </v-col>
      <v-col cols="3">
        <AboutMe />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.post-content {
  margin: 0 2rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.post-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #666;
}

.post-meta span {
  padding: 0.25rem 0.5rem;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.post-image {
  margin: 2rem 0;
  border-radius: 8px;
  overflow: hidden;
}

.post-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.post-body {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #2c3e50;
}

.post-body h2 {
  font-size: 1.8rem;
  margin: 2rem 0 1rem;
  color: #2c3e50;
}

.post-body p {
  margin-bottom: 1.5rem;
}
</style>

