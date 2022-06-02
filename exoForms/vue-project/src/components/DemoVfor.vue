<script setup>

import {ref} from "vue"

const user = ref(null)

</script>

<template>

<h1>Hello, world</h1>
<hr>
<h2>Hello Anonyme</h2>
<h2>Hello {{user}}</h2>
<button>se connecter</button>
<button>se déconnecter</button>

</template>

<style></style>
