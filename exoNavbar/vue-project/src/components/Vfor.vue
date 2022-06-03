<script setup>
import { ref } from "vue";

const tableau = ref([{ id: 1, nom: "chapdelaine", prenom: "paul" }]);
const nom = ref("");
const prenom = ref("");
const handleSubmit = () => {
  let timestamp = new Date().getUTCMilliseconds();
  tableau.value.push({ id: timestamp, nom, prenom });
};
const handleDelelte = (id) => {
  console.log(id);
  tableau.value = tableau.value.filter((el) => el.id !== id);
};
</script>

<template>
  <h3>ma liste:</h3>
  <ul v-for="element in tableau" :key="element.id" class="list-group">
    <span @click="handleDelelte(element.id)"
      ><li class="list-group-item">
        {{ element.nom }} {{ element.prenom }}
      </li></span
    >
  </ul>
  <hr />
  <div class="">
    <label class="form-label">Nom</label>
    <input type="text" v-model="nom" class="form-control" />
  </div>
  <div>
    <label class="form-label">Prénom</label>
    <input type="text" v-model="prenom" class="form-control" />
  </div>

  <button @click="handleSubmit" class="btn btn-primary my-3">Ajouter</button>
</template>