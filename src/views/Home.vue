<template>
  <div class="home">
    <my-posts/>
  </div>
</template>

<script>
// @ is an alias to /src
import Post_compo from "@/components/Post_compo.vue"
export default {
  name: "Home",
  components: {
    'my-posts' :Post_compo
  },
};
</script>
