<template>
  <div>
    <Header header="Levels"></Header>
    <AllLevels></AllLevels>
  </div>
</template>

<script>
import Header from "@/components/HeaderComponent.vue";
import AllLevels from "@/components/LevelsComponent.vue";
export default {
  name: "Levels",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    Header,
    AllLevels
  }
};
</script>

<style scoped></style>
