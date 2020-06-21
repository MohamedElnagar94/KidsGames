<template>
  <div>
    <Header header="Card 3 * 4"></Header>
    <!-- MAIN SECTION -->
    <section class="mainContent full-width clearfix">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="sectionTitle text-center">
              <h2>
                <span class="shape shape-left bg-color-4"></span>
                <span>Flip cards to compare between photos</span>
                <span class="shape shape-right bg-color-4"></span>
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <Card></Card>
        </div>
        <div id="tooltip" class="w-100 pt-5">
          <div class="text-center margin-bottom">
            <RouterLink
              to="/cardsLevels"
              class="d-flex justify-content-center align-items-center w-100"
            >
              <b-button
                v-b-tooltip.hover
                title="Back To Cards Levels"
                variant="btn btn-primary"
                >Back To Levels</b-button
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
import Card from "@/components/GameMemory/Cards3by4.vue";
export default {
  name: "Card3-4",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    Header,
    Card
  }
};
</script>

<style scoped></style>
