import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      name: "root",
      path: "/",
      redirect: "/app1",
    },
    {
      name: "app1",
      path: "/app1",
      component: () => import("components/app1.vue"),
    },
    {
      name: "app2",
      path: "/app2",
      component: () => import("components/app2.vue"),
    },
  ],
});
