<template>
  <div>
    <Header header="Level 3 Collection"></Header>
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
          <Puzzle2></Puzzle2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/HeaderComponent.vue";
import Puzzle2 from "@/components/Puzzle2CollectionComponent.vue";
export default {
  name: "Puzzle2Collection",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    Header,
    Puzzle2
  }
};
</script>

<style scoped></style>
