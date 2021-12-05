<template>
  <nav>
    <div class = "singlebox">
        <div class="posttop">
            <img src="res/images/dp.JPG" id="navitem" class="imageicon" />
            <label>26.09.2021</label>
        </div>
        <div class = "postituseSisu">
            <img src="src/images/pilt2.JPG"  class = "postitusePilt"/>
            <label>man's not hot</label>
            <img src="src/images/like.JPG"  class = "like"/>
        </div>
    </div>
  </nav>
</template>

<script>

   export default{

   }
</script>

<style lang= "scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>