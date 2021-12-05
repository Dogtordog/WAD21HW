<template>
  <nav>
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'contact' }"> Contact </router-link> |
      <router-link to="/about">About</router-link>

      <!--<div class="nav">
        <img src="images/logo.png" id="navitem" class="imageicon" />
      </div>
      <div class="nav">
        <form action="index.html" id="navitem">
          <input type="text" name="search" class="searchbar" />
          <input type="submit" value="Search" class="submitbutton" />
        </form>
      </div>
      <div class="nav">
        <div class="dropdown">
          <img src="images/dp.JPG" onclick="dropDown()" id="navitem" class="imageicon dropbtn"/>
          <div id="myDropdown" class="dropdown-content">
            <a href="#">John Doe</a>
            <a href="#">john.doe@example.com</a>
          </div>
        </div>
      </div>-->
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