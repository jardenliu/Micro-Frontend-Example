import "reflect-metadata";
import Vue from "vue";
import App from "App.vue";
import store from "store";
import router from "route";

new Vue({ store, router, render: (h) => h(App) }).$mount("#app");
