<template>
  <div class="app1-page" id="app1"></div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "app1",
})
export default class app1 extends Vue {
  mounted() {
    console.log(this.$store);
  }
}
</script>

<style lang="stylus"></style>
