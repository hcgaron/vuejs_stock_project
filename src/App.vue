<template>
  <div class="container-fluid">
    <div id="app" class="col-xs-12 col-md-10 offset-md-1">
      <app-header></app-header>
      <transition 
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    appHeader: Header
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.animated {
  animation-duration: 0.2s;
}
</style>
