
<template>
  <div class="app-container">
    <!-- <Navbar /> -->
    <main class="main-content">
      <router-view /> <!-- This is where your page content will be rendered -->
    </main>
    <!-- <Footer/> -->
  </div>
</template>

<script setup>

import Navbar from "./components/Navbar.vue";
// import Footer from "./components/Footer.vue";
</script>

<style scoped>

</style>
