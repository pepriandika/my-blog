<script setup>

</script>

<template>
  <div class="sidebar-search">
    <div class="sidebar-search-label">Cari</div>
    <form class="sidebar-search-form" action="#">
      <div class="sidebar-search-wrapper">
        <input type="search">
        <button type="submit">Cari</button>
      </div>
    </form>
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

form{
  border: 2px red !important;
}

.sidebar-search-form{
  margin-bottom: 0;
  margin-top: 0;
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
