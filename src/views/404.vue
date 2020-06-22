<template>
  <section>
    <Header header="Error Page"></Header>
    <!-- MAIN SECTION -->
    <section class="mainContent full-width clearfix">
      <div class="container">
        <div class="row text-left">
          <div class="col-sm-4 col-sm-offset-1 col-xs-12">
            <div class="errorMsg">
              <img
                src="img/error.png"
                alt="error image"
                class="img-responsive"
              />
            </div>
          </div>
          <div class="col-sm-6 col-xs-12">
            <div class="errorInfo">
              <h3>Oops!</h3>
              <p>We are sorry, This page could not found!</p>
              <form
                action="#"
                method="POST"
                role="form"
                class="homeContactContent errorSpace"
              >
                <div class="formBtnArea pull-left">
                  <a href="/" class="btn btn-primary bg-color-3"
                    >Return to home page</a
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/HeaderComponent.vue";
export default {
  name: "ErrorPage",
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
