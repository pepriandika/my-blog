<script setup>

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  imageSrc: {
    type: String,
  },
  imageAlt: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
  contentFile: {
    type: String,
  },
});
</script>

<template>
  <div class="card">
    <div class="card-image">
      <img :src="imageSrc" :alt="imageAlt" />
    </div>
    <div class="card-content">
      <span class="category">{{ category }}</span>
      <h3 class="card-title">{{ title }}</h3>
      <div class="card-meta">
        <span class="author">By {{ author }}</span> |
        <span class="date">{{ date }}</span>
      </div>
      <p class="card-description">{{ description }}</p>
      <button class="read-more">Read More</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  max-width: 100%;
  margin-bottom: 24px;
}

.card-image {
  position: relative;
  max-width: 400px;
  max-height: 300px;
  border: 5px solid #61acc0;
  border-radius: 8px;
}

.card-image img {
  width: 100%;
  height: 100%;
}

.card-content {
  padding-left: 16px;
}

.card-title {
  font-size: 1.8rem;
  margin-bottom: 8px;
}

.card-meta {
  display: flex;
  gap: 8px;
  font-size: 0.875rem;
  color: #757575;
  margin-bottom: 8px;
}

.card-description {
  font-size: 1rem;
  color: #424242;
  margin-bottom: 16px;
}

.category {
  background-color: #61acc0;
  color: white;
  padding: 4px 8px;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 4px;
}

.read-more {
  background-color: #61acc0;
  color: white;
  border: none;
  padding: 6px 14px;
  border-radius: 4px;
  cursor: pointer;
}

.read-more:hover {
  background-color: #4a8d9e;
}
</style>
