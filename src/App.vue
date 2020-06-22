<template>
  <div id="app">
    <!-- <template v-if="fixing"> -->
    <!-- <ComingSoon></ComingSoon> -->
    <!-- <router-view :key="$route.fullPath"></router-view> -->
    <!-- </template> -->
    <!-- <tamplate v-else> -->
    <NavBar></NavBar>
    <router-view :key="$route.fullPath"></router-view>
    <Footer></Footer>
    <!-- </tamplate> -->
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/views/Includes/NavBar.vue";
import Footer from "@/views/Includes/Footer.vue";
// import ComingSoon from "@/views/ComingSoon.vue";

export default {
  name: "Home",
  data() {
    return {
      fixing: true
    };
  },
  components: {
    NavBar,
    Footer
    // ComingSoon
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
