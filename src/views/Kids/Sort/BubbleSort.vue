<template>
  <div>
    <Header header="Bubble Sort"></Header>
    <!-- MAIN SECTION -->
    <section class="mainContent full-width clearfix">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="sectionTitle text-center">
              <h2>
                <span class="shape shape-left bg-color-4"></span>
                <span>Bubble Sort</span>
                <span class="shape shape-right bg-color-4"></span>
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <Bubble></Bubble>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/HeaderComponent.vue";
import Bubble from "@/components/Numbers/Sort/BubbleSortComponent.vue";
export default {
  name: "BubbleSort",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    Header,
    Bubble
  }
};
</script>

<style scoped></style>
