<template>
  <div class="hello-page">app2-hello</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "hello",
})
export default class Hello extends Vue {
  mounted() {
    console.log(this.$store);
  }
}
</script>

<style lang="stylus"></style>
