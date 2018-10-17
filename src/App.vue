<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }

</script>

<style>
  @import './styles/_alert.css';
  @import './styles/common.css';

  #app {
    width: 100%;
    height: 100%;
  }

</style>
