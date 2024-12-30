<script setup>
import BorderLabel from "@/components/sidebar/BorderLabel.vue";
import { computed, ref } from "vue";

const props = defineProps({
  category: {
    type: Array,
    required: true
  }
});

const uniqueTitles = computed(() => {
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
      <div>
        <ul>
          <li v-for="(item, index) in uniqueTitles"
              :key="index"
              :class="{'border-top': index >= 1}"
              class="category-name"
              @mouseover="showBullet(index)"
              @mouseleave="hideBullet(index)">
            <span class="bullet" :class="{ 'visible': visibleBullets[index] }">●</span>
            <a href="#">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>
  </BorderLabel>
</template>

<style scoped>
ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: #1a1e1e;
  transition: margin-left 0.3s ease; /* Transisi untuk mendorong teks */
}

li {
  position: relative; /* Untuk posisi bullet */
  padding: 10px 0;
}

.bullet {
  position: absolute;
  left: 0; /* Posisi awal bullet lebih jauh ke kiri */
  opacity: 0; /* Mulai dengan tidak terlihat */
  transform: translateX(-20px); /* Geser sedikit ke kanan */
  transition: opacity 0.5s ease, transform 0.3s ease; /* Transisi untuk bullet */
}

.bullet.visible {
  opacity: 1; /* Menjadi terlihat saat hover */
  transform: translateX(0); /* Geser ke posisi normal */
}

.category-name:hover a {
  margin-left: 20px; /* Mendorong teks ke kanan saat bullet muncul */
}

li:hover {
  color: #61acc0;
}

.category-name {
  color: #1a1e1e;
}

.border-top {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

a:hover {
  color: #61acc0;
  text-decoration: underline;
}
</style>
