<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view :key="$route.fullPath"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/views/Includes/NavBar.vue";
import Footer from "@/views/Includes/Footer.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Footer
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
