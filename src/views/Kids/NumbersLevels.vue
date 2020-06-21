<template>
  <div>
    <Header header="Numbers"></Header>
    <Numbers></Numbers>
  </div>
</template>

<script>
import Header from "@/components/HeaderComponent.vue";
import Numbers from "@/components/NumbersLevelsComponent.vue";
export default {
  name: "NumbersLevels",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    Header,
    Numbers
  }
};
</script>

<style scoped></style>
