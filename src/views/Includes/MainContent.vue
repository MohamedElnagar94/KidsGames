<template>
  <!-- MAIN CONTENT -->
  <section class="clearfix linkSection hidden-xs">
    <div class="sectionLinkArea hidden-xs scrolling">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-2">
            <div class="col-sm-6">
              <a
                href="#ourGallery"
                class="sectionLink bg-color-3"
                id="galleryLink"
              >
                <i
                  class="fa fa-picture-o linkIcon border-color-3"
                  aria-hidden="true"
                ></i>
                <span class="linkText">Gallery</span>
                <i
                  class="fa fa-chevron-down locateArrow"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div class="col-sm-6">
              <a
                href="#latestNews"
                class="sectionLink bg-color-4"
                id="newsLink"
              >
                <i
                  class="fa fa-files-o linkIcon border-color-4"
                  aria-hidden="true"
                ></i>
                <span class="linkText">Latest Games</span>
                <i
                  class="fa fa-chevron-down locateArrow"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainContent",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
};
</script>

<style scoped></style>
