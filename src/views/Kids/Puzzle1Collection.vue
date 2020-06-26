<template>
  <div>
    <Header header="Puzzle Collection"></Header>
    <!-- MAIN SECTION -->
    <section class="mainContent full-width clearfix">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="sectionTitle text-center">
              <h2>
                <span class="shape shape-left bg-color-4"></span>
                <span
                  >This collection helps you to learn how to collect parts to show the complete picture</span
                >
                <span class="shape shape-right bg-color-4"></span>
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <Puzzle1></Puzzle1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/HeaderComponent.vue";
import Puzzle1 from "@/components/Puzzle1CollectionComponent.vue";
export default {
  name: "Puzzle1Collection",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    Header,
    Puzzle1
  }
};
</script>

<style scoped></style>
