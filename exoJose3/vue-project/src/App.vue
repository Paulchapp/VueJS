<script setup>
import { ref } from "vue";
import * as jose from 'jose'

const compteur = ref(0);

//setInterval(() => {

//  compteur.value++
//}, 1000 )

function resetCompteur(){
  compteur.value = 0;
}

const jwtInput = ref('')
const claims = ref(null);

function decodeClaims() {
  try{
  claims.value = jose.decodeJwt(jwtIpunt.value)

} catch (err) {
  claims.value = err.message
  }
}

function saveJwt(){

  localStorage.stItem(jwtInput.value)
  loadSavedJwt()
}

const savedJwt = ref('')
function loadSavedJwt() {
  savedJwt.value = localStorage.getItem('jwt');
}

loadSavedJwt()


</script>


  <template>
    <Helloworld />
    <hr>
    <h1>Paul App</h1>
    <p> {{compteur}} </p>
    <button v-on:click="reset()">reset </button>
    <input type="number" v-model="compteur">

    <hr>
    
    <input type="number" v-model="jwtInput">
    <br>
    <p>{{jwtInput}}</p>

    <button @click="">Afficher les Claims</button>
    <p>{{Claims}}</p>
    <hr>
    <button @click="saveJwt()">Sauvegarder le token</button>
    <p>{{savedJwt}}</p>
    
  </template>

  <style></style>