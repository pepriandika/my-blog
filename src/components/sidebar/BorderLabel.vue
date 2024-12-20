<script setup>

</script>

<template>
  <div class="sidebar-search">
    <div class="sidebar-search-label">Cari</div>
    <slot></slot>
  </div>
</template>

<style scoped>
.sidebar-search {
  background: #fff9f3;
  border: 0.1rem solid #ffe7d2 !important;
  border-radius: 1.0rem;
  padding: 1.8rem ;
  position: relative;
}

.sidebar-search-label {
  letter-spacing: 0.25px;
  width: auto;
  line-height: 1.2;
  display: inline-block;
  padding: 8px 25px 7px;
  background-color: #fff;
  border-radius: 10rem;
  margin-bottom: 0;
  border: 1px solid rgba(39, 39, 39, 0.75);
  overflow: hidden;
  position: absolute;
  left: 25px;
  top: -20px;
}
</style>
