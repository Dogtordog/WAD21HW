<template>
  <div class="home">
    <my-posts/>
  </div>
</template>

<script>
// @ is an alias to /src
import post_compo from "@/components/post_compo.vue"
export default {
  name: "Home",
  components: {
    'my-posts' :post_compo
  },
};
</script>
