<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Hannes Kuslap tel: 123456789 email: emailio@ut.ee </p>
    <p>Mark Erik Pani tel: 987654321 email: email@ut.ee </p>
        
  </div>
</template>

<script>
export default {
  name: "Contacts",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
