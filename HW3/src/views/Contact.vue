<template>
  <div class="home">
    <Contacts msg="Our contacts" />
  </div>
</template>

<script>
// @ is an alias to /src
import Contacts from "@/components/Contacts.vue";

export default {
  name: "Home",
  components: {
    Contacts,
  },
};
</script>