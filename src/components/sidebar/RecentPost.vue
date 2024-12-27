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
       @click="navigateToPost(index)">
      <b>{{ item.title }}</b>
      <br/>
      <hr>
    </p>
  </BorderLabel>
</template>

<style scoped>
hr{
  margin-top: 10px;
  margin-bottom: 10px;
  opacity: 10%;
}
p:hover {
  color: #61acc0;
  cursor: pointer;
  text-decoration: underline;
}
</style>
