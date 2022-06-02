<script setup>
import { ref } from "vue";

const compteur = ref(0);

setInterval(() => {

  compteur.value++
}, 1000 )

</script>


  <template>

    <h1>Paul App</h1>
    <p> {{compteur}} </p>
    <button v-on:click="reset()">reset </button>
    <input type="number" v-model="compteur">

  </template>