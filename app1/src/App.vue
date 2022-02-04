<template>
  <div class="app-page">
    我是App1
    <router-link :to="{ name: 'welcome' }" tag="button">welcome</router-link>
    <router-link :to="{ name: 'hello' }" tag="button">hello</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "app",
})
export default class App extends Vue {
  mounted() {
    console.log(this.$store);
  }
}
</script>

<style lang="stylus"></style>
