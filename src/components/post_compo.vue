<template>
<div>
  <div class = "singlebox" v-for="post in posts" :key="post.id">
    <a>{{post.id}}</a>
  </div>
</div>
</template>

<script>
   export default{
      computed: {
        posts() {
          return this.$store.state.postsList;
        }
      }
   }
</script>

<style lang= "scss">

</style>