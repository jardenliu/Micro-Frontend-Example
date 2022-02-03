import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "hash",

  routes: [
    {
      name: "root",
      path: "/",
      redirect: "/welcome",
    },
    {
      name: "welcome",
      path: "/welcome",
      component: () => import("components/welcome.vue"),
    },
    {
      name: "hello",
      path: "/hello",
      component: () => import("components/hello.vue"),
    },
  ],
});
