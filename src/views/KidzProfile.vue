<template>
  <section>
    <Header header="Kid Profile"></Header>
    <Profile></Profile>
  </section>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/HeaderComponent.vue";
import Profile from "@/components/KidzProfileComponent.vue";

export default {
  name: "KidzProfile",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    Header,
    Profile
  }
};
</script>
