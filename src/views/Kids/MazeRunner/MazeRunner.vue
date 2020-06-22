<template>
  <div>
    <Header header="Maze Runner"></Header>
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
          <Maze></Maze>
          <div id="tooltip" class="w-100 pt-5">
            <div class="text-center margin-bottom">
              <RouterLink
                to="/cardsLevels"
                class="d-flex justify-content-center align-items-center w-100"
              >
                <b-button
                  v-b-tooltip.hover
                  title="Back To Memory Games Levels"
                  variant="btn btn-primary"
                  >Back To Memory Games Levels</b-button
                >
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/HeaderComponent.vue";
import Maze from "@/components/MazeGame/StartComponent.vue";
export default {
  name: "MazeRunner",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    Header,
    Maze
  }
};
</script>

<style scoped></style>
