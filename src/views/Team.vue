<template>
  <section>
    <Header header="Developer Team"></Header>
    <!-- WHITE SECTION -->
    <section class="whiteSection full-width clearfix">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="sectionTitle text-center">
              <h2>
                <span class="shape shape-left bg-color-4"></span>
                <span>Our Team</span>
                <span class="shape shape-right bg-color-4"></span>
              </h2>
            </div>
          </div>
        </div>
        <div class="row text-left">
          <div class="col-sm-6 col-xs-12">
            <div class="media teamStyle">
              <a class="media-left" href="#">
                <img
                  class="img-rounded img-responsive"
                  src="img/home/team/t1.jpg"
                  alt="Image"
                />
              </a>
              <div class="media-body">
                <h4 class="media-heading"><a href="#">Mohamed Elnagar</a></h4>
                <h5>Fullstack Developer</h5>

                <ul class="list-inline">
                  <li>
                    <a href="#" class="bg-color-1 facebook"
                      ><i class="fa fa-facebook" aria-hidden="true"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" class="bg-color-2"
                      ><i class="fa fa-twitter" aria-hidden="true"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xs-12">
            <div class="media teamStyle">
              <a class="media-left" href="#">
                <img
                  class="img-rounded img-responsive"
                  src="img/home/team/t2.jpeg"
                  alt="Image"
                />
              </a>
              <div class="media-body">
                <h4 class="media-heading"><a href="#">Eslam Taher</a></h4>
                <h5>Fullstack Developer</h5>

                <ul class="list-inline">
                  <li>
                    <a href="#" class="bg-color-1 facebook "
                      ><i class="fa fa-facebook" aria-hidden="true"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" class="bg-color-2"
                      ><i class="fa fa-twitter" aria-hidden="true"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xs-12">
            <div class="media teamStyle">
              <a class="media-left" href="#">
                <img
                  class="img-rounded img-responsive"
                  src="img/home/team/t3.jpeg"
                  alt="Image"
                />
              </a>
              <div class="media-body">
                <h4 class="media-heading"><a href="#">Ashraf Amer </a></h4>
                <h5>Fullstack Developer</h5>

                <ul class="list-inline">
                  <li>
                    <a href="#" class="bg-color-1 facebook "
                      ><i class="fa fa-facebook" aria-hidden="true"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" class="bg-color-2"
                      ><i class="fa fa-twitter" aria-hidden="true"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xs-12">
            <div class="media teamStyle">
              <a class="media-left" href="#">
                <img
                  class="img-rounded img-responsive"
                  src="img/home/team/t4.jpg"
                  alt="Image"
                />
              </a>
              <div class="media-body">
                <h4 class="media-heading"><a href="#">Mohamed Farag</a></h4>
                <h5>Fullstack Developer</h5>

                <ul class="list-inline">
                  <li>
                    <a href="#" class="bg-color-1 facebook "
                      ><i class="fa fa-facebook" aria-hidden="true"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" class="bg-color-2"
                      ><i class="fa fa-twitter" aria-hidden="true"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xs-12">
            <div class="media teamStyle">
              <a class="media-left" href="#">
                <img
                  class="img-rounded img-responsive"
                  src="img/home/team/t5.jpeg"
                  alt="Image"
                />
              </a>
              <div class="media-body">
                <h4 class="media-heading"><a href="#">Bannan Emad</a></h4>
                <h5>Fullstack Developer</h5>

                <ul class="list-inline">
                  <li>
                    <a href="#" class="bg-color-1 facebook "
                      ><i class="fa fa-facebook" aria-hidden="true"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" class="bg-color-2"
                      ><i class="fa fa-twitter" aria-hidden="true"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xs-12">
            <div class="media teamStyle">
              <a class="media-left" href="#">
                <img
                  class="img-rounded img-responsive t6"
                  src="img/home/team/t6.jpeg"
                  alt="Image"
                />
              </a>
              <div class="media-body">
                <h4 class="media-heading"><a href="#">Maryam Gowifel</a></h4>
                <h5>Fullstack Developer</h5>

                <ul class="list-inline">
                  <li>
                    <a href="#" class="bg-color-1 facebook "
                      ><i class="fa fa-facebook" aria-hidden="true"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" class="bg-color-2"
                      ><i class="fa fa-twitter" aria-hidden="true"></i
                    ></a>
                  </li>
                </ul>
              </div>
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
  name: "Team",
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

<style scoped>
.t6 {
  height: 118px;
}
.bg-color-1 {
  background-color: rgb(69, 69, 209) !important;
}
</style>
