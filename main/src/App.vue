<template>
  <div class="app-page">
    应用
    <router-link :to="{ name: 'app1' }" tag="button">app1</router-link>
    <router-link :to="{ name: 'app2' }" tag="button">app2</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { registerMicroApps, start } from "qiankun";

@Component({
  name: "app",
})
export default class App extends Vue {
  mounted() {
    console.log(this.$store);

    setTimeout(() => {
      registerMicroApps([
        {
          name: "app1", // app name registered
          entry: "//localhost:8081",
          container: "#app1",
          activeRule: "/app1",
        },
        {
          name: "app2", // app name registered
          entry: "//localhost:8082",
          container: "#app2",
          activeRule: "/app2",
        },
      ]);

      start();
    }, 2000);
  }
}
</script>

<style lang="stylus"></style>
