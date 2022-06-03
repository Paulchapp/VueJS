import { createRouter, createWebHistory } from "vue-router";
import DemoJwt from "../components/Jwt.vue";
import DemoVFor from "../components/Vfor.vue";
import Home from "../components/Accueil.vue";
import SignIn from "../components/Signin.vue";
import SignUp from "../components/Signup.vue";

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