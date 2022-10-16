import Vue from "vue";
// import store from "@/store";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/latest",
    name: "latest",
    component: HomeView,
  },
  {
    path: "/photo/:id",
    name: "photo",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  // // clear search if exists
  // if (store.state.searchText != "") {
  //   store.state.searchText = "";
  // }
  next();
});

export default router;
