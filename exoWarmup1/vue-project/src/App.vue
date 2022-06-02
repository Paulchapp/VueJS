<script setup>
import { ref } from "vue";

const compteur = ref(0);

setInterval(() => {

  computeur.value++
}, 1000 )

</script>


  <template>

    <h1>Paul App</h1>
    <p>{{computeur}}</p>
    <button v-on:click="reset()">reset </button>
    <input type="number" v-model="computeur"></input>

  </template>