<template>
  <div class="app2-page" id="app2"></div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "app2",
})
export default class app2 extends Vue {
  mounted() {
    console.log(this.$store);
  }
}
</script>

<style lang="stylus"></style>
