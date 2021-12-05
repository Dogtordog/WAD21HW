<template>
<div>
  <div class = "singlebox" v-for="post in posts" :key="post.id">
    <div class="posttop">
      <label>{{post.author}}</label>
      <label>{{post.time}}</label>
    </div>
    <div class = "postituseSisu">
      <img :src="assets/imgs"  class = "postitusePilt"/>
      <p>{{post.caption}}</p>
      <img src="assets/imgs/like.JPG"  class = "like"/>
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
      }
   }
</script>

<style scoped lang= "scss">
  .singlebox {
    display: flex;
    flex-direction: column;
    background-color:rgb(246, 246, 250);
    padding: 20px;
    position: relative;
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