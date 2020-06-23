<template>
  <div>
    <Header header="Puzzle"></Header>
    <!-- MAIN SECTION -->
    <section class="mainContent full-width clearfix">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="sectionTitle text-center">
              <h2>
                <span class="shape shape-left bg-color-4"></span>
                <span></span>
                <span class="shape shape-right bg-color-4"></span>
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <Puzzle></Puzzle>
        </div>
        <div id="tooltip" class="w-100 pt-5">
          <div class="text-center margin-bottom">
            <RouterLink
              to="/puzzle2Collections"
              class="d-flex justify-content-center align-items-center w-100"
            >
              <b-button
                v-b-tooltip.hover
                title="Back To Puzzle Collection Level 2"
                variant="btn btn-primary"
                >Back To Collection</b-button
              >
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/HeaderComponent.vue";
import Puzzle from "@/components/puzzle/Puzzle4.vue";
export default {
  name: "Puzzle2-5",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    Header,
    Puzzle
  }
};
</script>

<style scoped></style>
