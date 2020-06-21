<template>
  <div>
    <Header header="Count Numbers"></Header>
    <!-- MAIN SECTION -->
    <section class="mainContent full-width clearfix">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="sectionTitle text-center">
              <h2>
                <span class="shape shape-left bg-color-4"></span>
                <span
                  >Drag some pencils to the boxes according the numbers
                  displayed on their covers.</span
                >
                <span class="shape shape-right bg-color-4"></span>
              </h2>
            </div>
          </div>
        </div>
        <div class="row containers">
          <PencilInBox></PencilInBox>
        </div>
        <div id="tooltip" class="w-100 pt-5">
          <div class="text-center margin-bottom">
            <RouterLink
              to="/numbersLevels"
              class="d-flex justify-content-center align-items-center w-100"
            >
              <b-button
                v-b-tooltip.hover
                title="Back To Collection"
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
import PencilInBox from "@/components/Numbers/PencilInBox/PencilInBox.vue";
export default {
  name: "PencilsInBox",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    Header,
    PencilInBox
  }
};
</script>

<style scoped></style>
