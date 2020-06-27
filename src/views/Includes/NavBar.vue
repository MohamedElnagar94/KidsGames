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
                <a href="mailto:sara@gmail.com">sara@gmail.com</a>
              </li>
              <li>
                <i class="fa fa-phone bg-color-2" aria-hidden="true"></i> +201090123456
              </li>
              <li>
                <i class="fa fa-clock-o bg-color-6" aria-hidden="true"></i>
                Open: 9am - 6pm
              </li>
            </ul>
          </div>
          <div class="col-md-5">
            <ul
              class="list-inline functionList w-100 d-flex justify-content-center align-items-center"
            >
              <li
                v-if="Object.keys(currentUser).length === 0"
                class="w-100 d-flex justify-content-center align-item-center"
              >
                <i
                  class="fa fa-unlock-alt bg-color-5 mr-3"
                  aria-hidden="true"
                ></i>
                <a href="#loginModal" data-toggle="modal">Login</a>
              </li>
              <li
                v-if="Object.keys(currentUser).length !== 0"
                class="w-100 text-right"
              >
                <i class="fa fa-user bg-color-5 mr-3" aria-hidden="true"></i>
                <span
                  ><RouterLink to="/kidprofile"
                    >Welcome {{ currentUser.kid_name }}</RouterLink
                  ></span
                >
              </li>
              <li
                v-if="Object.keys(currentUser).length !== 0"
                class="w-100 text-left"
              >
                <i
                  class="fa fa-sign-out bg-color-5 mr-3"
                  aria-hidden="true"
                ></i>
                <span><a href="#" @click.prevent="logout">Logout</a></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- LOGIN MODAL -->
    <div
      class="modal fade customModal"
      ref="modal"
      id="loginModal"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="panel panel-default formPanel">
            <div class="panel-heading bg-color-1 border-color-1">
              <h3 class="panel-title">Login</h3>
            </div>
            <div class="panel-body">
              <div
                class="alert alert-danger"
                v-if="errorMassage !== null"
                role="alert"
              >
                {{ errorMassage }}
              </div>
              <div
                class="alert alert-success"
                v-if="successMessage !== null"
                role="alert"
              >
                {{ successMessage }}
              </div>
              <form
                @submit.prevent="login"
                action="#"
                method="POST"
                role="form"
              >
                <div class="form-group formField d-flex flex-column text-left">
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    placeholder="E-mail"
                    required
                  />
                  <!-- <span class="text-danger" v-if="errorMassage !== null">{{errorMassage}}</span> -->
                </div>
                <div class="form-group formField">
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    required
                  />
                </div>
                <div class="form-group formField d-flex flex-column">
                  <input
                    type="submit"
                    class="btn btn-primary btn-block bg-color-3 border-color-3"
                    value="Log in"
                  />
                  <button
                    type="button"
                    class="btn btn-secondary"
                    id="closeModel"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
                <div class="form-group formField">
                  <p class="help-block"><a href="#">Forgot password?</a></p>
                </div>
              </form>
            </div>
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
import axios from "axios";
import Swal from "sweetalert2";
// import $ from "jquery/dist/jquery.min";
// import "bootstrap/dist/js/bootstrap"
export default {
  name: "NavBar",
  data() {
    return {
      publicPath: process.env.BASE_URL,
      email: null,
      password: null,
      currentUser: [],
      successMessage: null,
      errorMassage: null
    };
  },
  methods: {
    login: function() {
      axios
        .post("http://127.0.0.1:8000/api/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          localStorage.setItem("auth", JSON.stringify(response.data.data));
          this.$root.auth = response.data.data;
          this.currentUser = this.$root.auth;
          // this.$router.push('/')
          this.successMessage = "Login successfully";
          this.errorMassage = null;
          setTimeout(() => {
            window.$("#loginModal").modal("hide");
          }, 1000);
        })
        .catch(error => {
          if (!error.response) {
            // network error
            this.errorMassage = "Server not found";
            this.successMessage = null;
          } else {
            this.errorMassage = error.response.data.message;
            this.successMessage = null;
          }
        })

        .then(() => {});
    },
    logout: function() {
      axios
        .post(
          "http://127.0.0.1:8000/api/logout",
          {
            id: this.currentUser.id
          },
          { headers: { _token: this.currentUser.access_token } }
        )
        .then(response => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: response.data.data,
            showConfirmButton: false,
            timer: 2000
          });
          localStorage.removeItem("auth");
          this.$root.auth = null;
          this.currentUser = [];
          window.location.pathname = "/";
          // setTimeout(() => {
          //   window.$("#loginModal").modal("hide");
          // }, 1000);
        })
        .catch(error => {
          if (!error.response) {
            // network error
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "server not found !"
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.response.data.message
            });
          }
        })

        .then(() => {});
    }
  },
  created() {
    this.currentUser = this.$root.auth;
    console.log(Object.keys(this.currentUser).length === 0);
    // $("#loginModal").show()
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
.btn.btn-secondary:hover {
  color: white;
}
</style>
