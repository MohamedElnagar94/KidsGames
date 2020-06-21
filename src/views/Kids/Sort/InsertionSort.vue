<template>
  <div>
    <Header header="Insertion Sort"></Header>
    <!-- MAIN SECTION -->
    <section class="mainContent full-width clearfix">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="sectionTitle text-center">
              <h2>
                <span class="shape shape-left bg-color-4"></span>
                <span>Insertion Sort</span>
                <span class="shape shape-right bg-color-4"></span>
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <Insertion></Insertion>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/HeaderComponent.vue";
import Insertion from "@/components/Numbers/Sort/InsertionSortComponent.vue";
export default {
  name: "InsertionSort",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    Header,
    Insertion
  }
};
</script>

<style scoped></style>
