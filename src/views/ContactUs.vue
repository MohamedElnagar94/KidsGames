<template>
  <section>
    <Header header="Contact US"></Header>
    <!-- MAIN SECTION -->
    <section class="mainContent full-width clearfix conactSection">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 col-xs-12">
            <div class="media addressContent">
              <span class="media-left bg-color-1" href="#">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </span>
              <div class="media-body">
                <h3 class="media-heading">Address:</h3>
                <p>Farouq Street Zagazig,Egypt.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-xs-12">
            <div class="media addressContent">
              <span class="media-left bg-color-2" href="#">
                <i class="fa fa-phone" aria-hidden="true"></i>
              </span>
              <div class="media-body">
                <h3 class="media-heading">Phone:</h3>
                <p>010 100 23121</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-xs-12">
            <div class="media addressContent">
              <span class="media-left bg-color-3" href="#">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </span>
              <div class="media-body">
                <h3 class="media-heading">Email:</h3>
                <p>
                  <a href="mailto:hello@example.com">sara@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="row">
          <div class="col-xs-12">
            <div class="mapArea areaPadding">
              <div id="map"></div>
            </div>
          </div>
        </div> -->
        <div class="row" style="padding-top: 40px;">
          <div class="col-xs-12">
            <div class="homeContactContent">
              <form action="#" method="POST" role="form">
                <div class="row">
                  <div class="col-sm-6 col-xs-12">
                    <div class="form-group">
                      <i class="fa fa-user"></i>
                      <input
                        type="text"
                        class="form-control border-color-1"
                        id="exampleInputEmail1"
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-xs-12">
                    <div class="form-group">
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                      <input
                        type="text"
                        class="form-control border-color-2"
                        id="exampleInputEmail2"
                        placeholder="Email address"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-xs-12">
                    <div class="form-group">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                      <input
                        type="text"
                        class="form-control border-color-5"
                        id="exampleInputEmail3"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-xs-12">
                    <div class="form-group">
                      <i class="fa fa-book" aria-hidden="true"></i>
                      <input
                        type="text"
                        class="form-control border-color-6"
                        id="exampleInputEmail4"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <div class="form-group">
                      <i class="fa fa-comments" aria-hidden="true"></i>
                      <textarea
                        class="form-control border-color-4"
                        placeholder="Write message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <div class="formBtnArea">
                      <button type="submit" class="btn btn-primary">
                        Send Message
                      </button>
                    </div>
                  </div>
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
  name: "ContactUs",
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
