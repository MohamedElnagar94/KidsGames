<template>
  <section>
    <Header header="About us"></Header>
    <!-- MAIN SECTION -->
    <section class="mainContent full-width clearfix aboutSection">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-sm-push-6 col-xs-12">
            <img
              src="img/about_us/main1.jpg"
              alt="image"
              class="img-responsive img-rounded"
            />
          </div>
          <div class="col-sm-6 col-sm-pull-6 col-xs-12 text-left">
            <div class="schoolInfo">
              <h2>Wellcome to kidz school</h2>
              <p>
                The education your child receives will set the groundwork for
                future successes. No matter his age -- from kindergarten to high
                school -- we have all the advice and information you need on
                reaching potential in reading, writing, math, and more.
              </p>
              <p class="color-3">
                As your child advances in number learning, you can improve his
                mathematical skills with at-home practice. These free printable
                addition worksheets are best suited for children in first
                through third grades.
              </p>
              <ul class="list-unstyled para-list">
                <li>
                  <i class="fa fa-check" aria-hidden="true"></i>
                  10 Fun Math Activities for Kindergarteners
                </li>
                <li>
                  <i class="fa fa-check" aria-hidden="true"></i>
                  Guide for Kids' Education
                </li>
                <li>
                  <i class="fa fa-check" aria-hidden="true"></i>
                  Age-by-Age Guide to Reading to Your Baby
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- COLOR SECTION -->

    <!-- COLOR SECTION -->
  </section>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/HeaderComponent.vue";
export default {
  name: "About",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    Header
  }
};
</script>
