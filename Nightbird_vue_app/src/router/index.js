import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/menu",
      name: "menu",
    },
    {
      path: "/gallery",
      name: "gallery",
    },
    {
      path: "/reservations",
      name: "reservations",
    },
  ],
});

export default router;
