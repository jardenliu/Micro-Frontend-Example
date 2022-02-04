<template>
  <div class="welcome-page">app1-welcome</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "Welcome",
})
export default class Welcome extends Vue {
  mounted() {
    console.log(this.$store);
  }
}
</script>

<style lang="stylus"></style>
