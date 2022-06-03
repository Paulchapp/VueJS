import { createRouter, createWebHistory } from "vue-router";
import Jwt from "../components/Jwt.vue";
import Vfor from "../components/Vfor.vue";
import Accueil from "../components/Accueil.vue";
import Signin from "../components/Signin.vue";
import Signup from "../components/Signup.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Accueil",
      component: Accueil,
    },
    {
      path: "/jwt",
      name: "jwt",
      component: Jwt,
    },
    {
      path: "/vfor",
      name: "vfor",
      component: Vfor,
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
    },
    {
      path: "/signin",
      name: "signin",
      component: Signin,
    },
  ],
});

export default router;