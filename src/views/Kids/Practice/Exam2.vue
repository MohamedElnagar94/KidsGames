<template>
  <div>
    <Header header="Practice"></Header>
    <!-- MAIN SECTION -->
    <section class="mainContent full-width clearfix">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="sectionTitle text-center">
              <h2>
                <span class="shape shape-left bg-color-4"></span>
                <span
                  >Choose the correct Number and drag it to the empty
                  place</span
                >
                <span class="shape shape-right bg-color-4"></span>
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <Exam></Exam>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/HeaderComponent.vue";
import Exam from "@/components/Numbers/ExamNumbersComponent.vue";
export default {
  name: "Exam2",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    Header,
    Exam
  }
};
</script>

<style scoped></style>
