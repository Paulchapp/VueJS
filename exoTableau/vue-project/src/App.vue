<script stup>

import {ref} from "vue"

const tableau = ref([1, 2, 3])

const kisteDObjets = ref([
{id: 0, name:"Paul"},
{id: 1, name:"Bob"},
{id: 2, name:"Charlie"},
])


</script>

<template>

<h1>Hello, world</h1>
<p v-for="i in tableau">{{i}}</p>
<ul>
    <li v-for="monObjet in listDObjets" :keys="monObjet.id">{{monObjet}}</li>
</ul>
<div v-for="monOjet in ListOjets" :keys="monOjet.id">
      <h2>{{monOjet.name}}</h2>
      <p>{{monOjet.id}}</p>
</div>
</template>

<style></style>
