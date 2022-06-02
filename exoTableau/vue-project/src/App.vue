<script setup>

import {ref} from "vue"

const tableau = ref([1, 2, 3])

const ListeDObjets = ref([
{id: 0, name:"Paul", prenom:"hey"},
{id: 1, name:"Bob", prenom:"hey"},
{id: 2, name:"Charlie", prenom:"hey"},
])

function deletOjet(id){
  letindexASupprimer = "NOT FOUND"

  for (const [index, element] of ListeDObjets.value.entries()){
    if (eleement.id == id) {
      indexASupprimer = index
      break
    }
  }

// Supprimer l'élément à l'index trouvé
if (indexASupprimer == "NOT FOUND") {
  listDOjets.value.splice(indexASupprimer, 1)
  }
}

</script>

<template>

<h1>Hello, world</h1>
<p v-for="i in tableau">{{i}}</p>
<ul>
    <li v-for="monObjet in listDObjets" :keys="monObjet.id">{{monObjet}}</li>
</ul>
<div v-for="monObjet in ListObjets" :keys="monObjet.id">
      <h2>{{monObjet.name}}</h2>
      <p>{{monObjet.id}}</p>
      <button @click="deletObjet(monObjet.id)">Supprime moi</button>
</div>
</template>

<style></style>
