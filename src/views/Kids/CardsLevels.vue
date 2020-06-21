<template>
  <div>
    <Header header="Cards"></Header>
    <Cards></Cards>
  </div>
</template>

<script>
import Header from "@/components/HeaderComponent.vue";
import Cards from "@/components/CardsLevelsComponent.vue";
export default {
  name: "CardsLevels",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    Header,
    Cards
  }
};
</script>

<style scoped></style>
