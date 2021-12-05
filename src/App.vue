<template>
  <div id="app">
    <div id="nav">
      <my-header></my-header>
    </div>
    <div>
      <post-compo></post-compo>
    </div>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Post_compo from './components/Post_compo.vue'
  export default {
     components:{
         'my-header':Header,
         'my-footer':Footer,
         'post-compo':Post_compo
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
