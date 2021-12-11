<template>
<div>
  <div class = "container">
  <div class = "box">
  <div class = "singlebox" v-for="post in posts" :key="post.id">
    <div class="posttop">
      <label>{{post.author}}</label>
      <label>{{post.time}}</label>
    </div>
    <div class = "postituseSisu">
      {{post.image}}
      <p>{{post.caption}}</p>
      <img v-on:click="likeUp(post)" src="../assets/like.png" class = "like"/>
      <a>{{ post.likeCount }}</a>
    </div>
  </div>
</div>
</div>
</div>
</template>


<script>
   export default{
      computed: {
        posts() {
          return this.$store.getters.postsList;
        }
      },
      methods: {
        likeUp: function(post){ 
          this.$store.dispatch("increment", post)
        }
      }

   }
</script>

<style scoped lang= "scss">
  .container  {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }

  .box {
    display: flex;
    height: 100%;
    width: 500px;
    flex-direction: column;
    background-color: #f1f1f1;
    position: relative;
    text-align: center;
  }
  .singlebox {
    display: flex;
    flex-direction: column;
    background-color:rgb(246, 246, 250);
    padding: 20px;
    position: relative;
  }

  .like{
    padding: 0 0 1% 1%;
    height: 20px;
    width: 20px;
  }

  .singlebox + .singlebox{
    padding-top: 0px;
  }

  .posttop{
    box-shadow: 2px 2px 2px 2px rgb(191, 191, 197);
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    display:flex;
    justify-content: space-between;
    background-color: rgb(232, 232, 240);
    flex-direction: row;
  }
  .postituseSisu{
    box-shadow: 2px 2px 2px 2px rgb(191, 191, 197);
    display:flex;
    background-color: rgb(232, 232, 240);
    flex-direction: column;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  .postitusePilt{

  }
  .postitusePilt + label{
    font-size: smaller;
  }
  .posttop > label{
    color: rgb(87, 87, 87);
    font-size: x-small;
    padding: 1% 1% 0 0;
  }
</style>