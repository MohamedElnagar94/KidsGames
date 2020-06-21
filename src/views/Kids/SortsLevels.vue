<template>
  <div>
    <Header header="Sort Algorithm"></Header>
    <Sort></Sort>
  </div>
</template>

<script>
import Header from "@/components/HeaderComponent.vue";
import Sort from "@/components/SortsLevelsComponent.vue";
export default {
  name: "CardsLevels",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    Header,
    Sort
  }
};
</script>

<style scoped></style>
