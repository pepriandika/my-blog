<script setup>
import BorderLabel from "@/components/sidebar/BorderLabel.vue";
import {computed, ref} from "vue";

const props = defineProps({
  category: {
    type: Array,
    required: true
  }
});

const uniqueTitles= computed(() => {
  const seen = new Set();
  return props.category
      .map(item => item.category)
      .filter(category => {
        if (seen.has(category)) return false;
        seen.add(category);
        return true;
      });
});

// Untuk mengontrol visibilitas bullet pada setiap elemen
const visibleBullets = ref(new Array(uniqueTitles.value.length).fill(false));

function showBullet(index) {
  visibleBullets.value[index] = true;
}

function hideBullet(index) {
  visibleBullets.value[index] = false;
}
</script>

<template>
  <BorderLabel msg="Category">
    <div>
      <div
        v-for="(item,index) in uniqueTitles"
        :key="index"
      >
        <p @mouseenter="showBullet(index)" @mouseleave="hideBullet(index)">
          <span class="bullet" :style="{ display: visibleBullets[index] ? 'inline' : 'none' }">●</span>
          <span class="category-name">{{ item }}</span>
        </p>
        <hr/>
      </div>
    </div>
  </BorderLabel>
</template>

<style scoped>
hr {
  opacity: 0.2;
  margin-top: 15px;
  margin-bottom: 15px;
}

.category-name:hover {
  transition: color 0.3s ease;
  color: #61acc0;
  text-decoration: underline;
}

.bullet {
  color: #61acc0;
  text-decoration: none;
  padding: 0;
  margin-right: 1rem;
}

p {
  height: 2rem;
}
</style>
