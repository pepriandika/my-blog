<script setup>
import BorderLabel from "@/components/sidebar/BorderLabel.vue";
import { useRouter } from 'vue-router';

const props = defineProps({
  title: {
    type: Array,
    required: true
  }
});

const router = useRouter();

const navigateToPost = (index) => {
  router.push(`/post/${props.title[index].id}`);
};
</script>

<template>
  <BorderLabel msg="Recent Post">
    <p v-for="(item, index) in title.slice(0, 5)"
       :key="index"
       :class="{'border-top': index >= 1}"
       @click="navigateToPost(index)">
      <b>{{ item.title }}</b>
      <br/>
    </p>
  </BorderLabel>
</template>

<style scoped>
p {
  padding: 10px 0;
}

p:hover {
  color: #61acc0;
  cursor: pointer;
  text-decoration: underline;
}

.border-top {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
