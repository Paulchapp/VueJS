<script setup></script>
<template>
  <h1>Formulaire de connexion</h1>
  <form class="my-3">
    <div class="form-group">
      <label for="exampleInputEmail1">l'adresse e-mail</label>
      <input
        type="email"
        class="form-control"
        placeholder="Saisir votre l'adresse e-mail..."
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Mot de passe</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Saisir votre mot de passe ..."
      />
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1"
        >Se souvnenir de moi</label
      >
    </div>
    <button type="submit" class="btn btn-primary">Se connecter</button>
  </form>
</template>