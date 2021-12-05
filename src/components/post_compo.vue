<template>
<div>
  <div class = "singlebox" v-for="post in posts" :key="post.id">
    {{post}}
    <a>"test test"</a>
  </div>
</div>
</template>

<script>

   export default{
      computed: {
        posts() {
          return this.$store.state.posts;
        }
      }
   }
</script>

<style lang= "scss">

</style>