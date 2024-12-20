<script setup>
import BorderLabel from "@/components/sidebar/BorderLabel.vue";
</script>

<template>
  <BorderLabel>
    <form class="sidebar-search-form" action="#">
      <div class="sidebar-search-wrapper">
        <input type="search">
        <button type="submit">Cari</button>
        <p>tes tes tes</p>
      </div>
    </form>
  </BorderLabel>
</template>

<style scoped>

form{
  border: 2px red !important;
}

.sidebar-search-form{
  margin-bottom: 0;
  margin-top: 0;
}

.sidebar-search-wrapper {
  display: flex;
  flex-wrap: nowrap;
  max-width: 100%;
}
.sidebar-search-wrapper input {
  margin-top: 0.8rem;
  max-width: 75%;
  font-size: inherit;
  font-weight: 400;
  border: 2px solid rgba(190, 190, 190, 0.3);
  background-color: white;
  padding: 0.5rem 1.0rem;
  color: #66717f;
  width: 100%;
  border-radius: 5px;
  line-height: 1 !important;
}

.sidebar-search-wrapper button {
  background-color: #61acc0;
  color: white;
  padding: 0.2rem 1.0rem;
  margin-top: 0.8rem;
  margin-left: 0.3rem;
  border-radius: 5px;
}
</style>
