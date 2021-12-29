<template>
  <div>
    <cv-header />
    <router-view />
  </div>
</template>

<script>
import cvHeader from "./components/layout/header.vue";
import cvLoader from "./components/layout/loader.vue";

export default {
  name: "app",
  components: {
    cvHeader,
    cvLoader
  }
};
</script>

<style scoped>
#app {
  background: #eceff1;
  font-family: Lato, Helvetica Neue, Arial, Helvetica, sans-serif;
}
</style>
