<template>
  <div id="app">
    <div id="nav">
      <my-header></my-header>
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'
  export default {
     components:{
         'my-header':Header
     }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
