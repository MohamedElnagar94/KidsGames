<template>
  <Header header="About us"></Header>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/HeaderComponent.vue";
export default {
  name: "About",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    Header
  }
};
</script>
