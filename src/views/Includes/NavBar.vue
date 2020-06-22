<template>
  <!-- HEADER -->
  <header id="pageTop" class="header-wrapper">
    <ColorBar topFixed="top-fixed"></ColorBar>
    <!-- TOP INFO BAR -->
    <div class="top-info-bar bg-color-7">
      <div class="container p-0">
        <div class="row text-left">
          <div class="col-md-7">
            <ul
              class="list-inline topList d-flex justify-content-start align-items-center"
            >
              <li>
                <i class="fa fa-envelope bg-color-1" aria-hidden="true"></i>
                <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
              </li>
              <li>
                <i class="fa fa-phone bg-color-2" aria-hidden="true"></i> +1 234
                567 8900
              </li>
              <li>
                <i class="fa fa-clock-o bg-color-6" aria-hidden="true"></i>
                Open: 9am - 6pm
              </li>
            </ul>
          </div>
          <div class="col-md-5">
            <ul class="list-inline functionList w-100">
              <li class="w-100 d-flex justify-content-center align-item-center">
                <i
                  class="fa fa-unlock-alt bg-color-5 mr-3"
                  aria-hidden="true"
                ></i>
                <a href="#loginModal" data-toggle="modal">Login</a
                ><span>or</span
                ><a href="#createAccount" data-toggle="modal"
                  >Create an account</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Nav></Nav>
  </header>
</template>

<script>
import ColorBar from "@/components/ColorBarComponent.vue";
import Nav from "@/components/NavBarComponent";
export default {
  name: "NavBar",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    Nav,
    ColorBar
  }
};
</script>

<style scoped>
/*// Extra small devices (portrait phones, less than 576px)*/
@media (max-width: 575.98px) {
  .top-info-bar {
    display: none;
  }
  .navbar-header {
    width: 100%;
  }
}

/*// Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) and (max-width: 767.98px) {
  .top-info-bar {
    display: none;
  }
}

/*// Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) and (max-width: 991.98px) {
}

/*// Large devices (desktops, 992px and up)*/
@media (min-width: 992px) and (max-width: 1199.98px) {
}

/*// Extra large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) {
}
</style>
