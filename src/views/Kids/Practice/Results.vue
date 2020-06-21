<template>
  <div>
    <Header header="Result"></Header>
    <!-- MAIN SECTION -->
    <section class="mainContent full-width clearfix">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="sectionTitle text-center">
              <h2>
                <span class="shape shape-left bg-color-4"></span>
                <span>The result of practice</span>
                <span class="shape shape-right bg-color-4"></span>
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <Result></Result>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/HeaderComponent.vue";
import Result from "@/components/Numbers/ResultComponent.vue";
export default {
  name: "Results",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    Header,
    Result
  }
};
</script>

<style scoped></style>
