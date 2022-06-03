<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="container">
    <header>
      <Navbar />
    </header>
    <router-view />
  </div>
</template>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
</style>