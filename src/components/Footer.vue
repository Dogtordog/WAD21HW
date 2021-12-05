<template>
  <footer>
      <router-link :to="{ name: 'contact' }"> Contact us </router-link>
  </footer>
</template>

<style scoped lang="scss">
  a {
    font-weight: bold;
    color: #3d566e;

    &.router-link-exact-active {
      color: #235f44;
    }
  }
</style>