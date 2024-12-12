<script setup>

</script>

<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* Header Styling */
header {
  background-color: #2c3e50;
  padding: 1rem 2rem;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

nav a {
  text-decoration: none;
  color: #ecf0f1;
  font-size: 1rem;
}

nav a.router-link-active {
  font-weight: bold;
  color: #2ecc71;
}
</style>
