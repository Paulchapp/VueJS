<script setup></script>
<template>
  <h1>Formulaire d'inscription</h1>
  <form class="my-3">
    <div class="form-group">
      <label for="exampleInputEmail1">Nom</label>
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="Saisir votre nom..."
      />
    </div>
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
    <button type="submit" class="btn btn-primary">Créer</button>
  </form>
</template>