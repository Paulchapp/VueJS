<script setup>
import { ref } from "vue";
import * as jose from "jose";
const token = ref(
  localStorage.getItem("jwtToken") ? "" : localStorage.getItem("jwtToken")
);
const result = ref({});
const decodeToken = () => {
  result.value = jose.decodeJwt(token.value);
};
</script>

<template>
  <div class="form-group my-3">
    <label class="form-label">JWT</label>
    <textarea
      id=""
      cols="30"
      rows="10"
      v-model="token"
      placeholder="Insert a token here ..."
      class="form-control"
    >
    </textarea>
    <button @click="decodeToken" class="btn btn-success my-3">
      Decode this token
    </button>
  </div>

  <h3>Decoded token is :</h3>
  <p>{{ result }}</p>
</template>