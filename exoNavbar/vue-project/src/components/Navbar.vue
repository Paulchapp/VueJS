<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Acceuil</router-link>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <router-link to="/jwt" class="nav-link">JWT</router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/vfor" class="nav-link">VFor</router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/signup" class="nav-link">Inscription</router-link>
      </li>
    </ul>
    <div class="nav-item my-2 my-lg-0">
      <button class="btn btn-primary">Se connecter</button>
    </div>
  </nav>
</template>
<style></style>