<template>
  <!-- FOOTER -->
  <footer>
    <ColorBar topFixed=""></ColorBar>
    <!-- FOOTER INFO AREA -->
    <div
      class="footerInfoArea full-width clearfix"
      style="background-image: url(/img/footer/footer-bg-1.png);"
    >
      <div class="container text-left">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-3">
            <div class="footerTitle">
              <a href="index.html"><img src="img/logo-footer.png"/></a>
            </div>
            <div class="footerInfo">
              <p>
                teaching mathematics principles in simple attractive way, using
                simple games which focused on learning numbers, mathematical
                operations.
              </p>
              <p>
                there are some entertainment games to help improving the
                children skills like memory games for children from 4 to 6 years
                .
              </p>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-3">
            <div class="footerTitle">
              <h4>Useful Links</h4>
            </div>
            <div class="footerInfo">
              <ul class="list-unstyled footerList">
                <li>
                  <a href="/">
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i
                    >Kidz School
                  </a>
                </li>
                <li>
                  <a href="/about">
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i
                    >About Kidz School
                  </a>
                </li>
                <li>
                  <a href="/categories">
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i
                    >Categories
                  </a>
                </li>
                <li>
                  <a href="/contactus">
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i
                    >Contact Us
                  </a>
                </li>
                <li>
                  <a href="/photoGallery">
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                    Photo Gallery
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-3">
            <div class="footerTitle">
              <h4>Recent Post</h4>
            </div>
            <div class="footerInfo">
              <ul class="list-unstyled postLink">
                <li>
                  <div
                    class="media d-flex justify-content-center align-items-center"
                  >
                    <a class="media-left mr-2" href="/numbersLevels">
                      <img
                        class="media-object img-rounded border-color-1"
                        src="img/footer/photo1.png"
                        alt="Image"
                      />
                    </a>
                    <div class="media-body">
                      <h5 class="media-heading">
                        <a href="/numbersLevels">Numbers Game</a>
                      </h5>
                      <p>June 6 - 2020</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="media d-flex justify-content-center align-items-center"
                  >
                    <a class="media-left mr-2" href="/cardsLevels">
                      <img
                        class="media-object img-rounded border-color-2"
                        src="img/footer/photo4.png"
                        alt="Image"
                      />
                    </a>
                    <div class="media-body">
                      <h5 class="media-heading">
                        <a href="/cardsLevels">Ballons Game</a>
                      </h5>
                      <p>June 8 - 2020</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="media d-flex justify-content-center align-items-center"
                  >
                    <a class="media-left mr-2" href="/sortsLevels">
                      <img
                        class="media-object img-rounded border-color-4"
                        src="img/footer/photo15.png"
                        alt="Image"
                      />
                    </a>
                    <div class="media-body">
                      <h5 class="media-heading">
                        <a href="/sortsLevels">Inseration Sort Game</a>
                      </h5>
                      <p>June 9 - 2020</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-3">
            <div class="footerTitle">
              <h4>Mailing List</h4>
            </div>
            <div class="footerInfo">
              <p>
                Sign up for our mailing list to get latest updates and offers.
              </p>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                  aria-describedby="basic-addon21"
                />
                <button
                  type="submit"
                  class="input-group-addon"
                  id="basic-addon21"
                >
                  <i class="fa fa-check" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- COPY RIGHT -->
    <div class="copyRight clearfix">
      <div class="container">
        <div class="row">
          <div class="col-sm-5 col-sm-push-7 col-12">
            <ul class="list-inline d-flex justify-content-center">
              <li class="pl-2 pr-2">
                <a href="#" class="bg-color-1"
                  ><i class="fa fa-facebook" aria-hidden="true"></i
                ></a>
              </li>
              <li class="pl-2 pr-2">
                <a href="#" class="bg-color-2"
                  ><i class="fa fa-twitter" aria-hidden="true"></i
                ></a>
              </li>
              <li class="pl-2 pr-2">
                <a href="#" class="bg-color-3"
                  ><i class="fa fa-google-plus" aria-hidden="true"></i
                ></a>
              </li>
              <li class="pl-2 pr-2">
                <a href="#" class="bg-color-4"
                  ><i class="fa fa-pinterest-p" aria-hidden="true"></i
                ></a>
              </li>
              <li class="pl-2 pr-2">
                <a href="#" class="bg-color-5"
                  ><i class="fa fa-vimeo" aria-hidden="true"></i
                ></a>
              </li>
            </ul>
          </div>
          <div class="col-sm-7 col-sm-pull-5 col-12">
            <div
              class="copyRightText d-flex justify-content-center align-items-center"
            >
              <p>
                © 2020 Copyright Kidz School
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import ColorBar from "@/components/ColorBarComponent.vue";
export default {
  name: "Footer",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    ColorBar
  }
};
</script>

<style scoped></style>
