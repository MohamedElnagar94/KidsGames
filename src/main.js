import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import $ from "jquery";
// import jQuery from 'jquery/dist/jquery.min'
// window.$ = window.jQuery = require('jquery');
// Install BootstrapVue

Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Vue.use({
//   install: function(Vue, options){
//     Vue.prototype.$ = require('jquery/dist/jquery.min'); // you'll have this.$jQuery anywhere in your vue project
//   }
// });

// global.jQuery = require('jquery');
// let $ = global.jQuery;
// window.$ = $;
// window.$ = window.jQuery;
// window.$ = window.jQuery = require('jquery/dist/jquery.min');
// import jQuery from 'jquery'
// global.$ = global.jQuery = jQuery;
// css
// import "bootstrap/dist/css/bootstrap.css";
// import "font-awesome/css/font-awesome.css";
// import "sweetalert2/dist/sweetalert2.min.css";
// import "./assets/css/bootstrap.min.css";
// import "./assets/plugins/jquery-ui/jquery-ui.css";
// import "./assets/plugins/bootstrap/css/bootstrap.min.css";
// // import "./assets/plugins/font-awesome/css/font-awesome.min.css";
// import "./assets/plugins/rs-plugin/css/settings.css";
// import "./assets/plugins/selectbox/select_option1.css";
// import "./assets/plugins/owl-carousel/owl.carousel.css";
// import "./assets/plugins/isotope/jquery.fancybox.css";
// import "./assets/plugins/isotope/isotope.css";
// import "./assets/css/style.css";
// import "./assets/options/animate.css";
// import "./assets/options/optionswitch.css";
// import "./assets/css/default.css";
// import "./assets/img/favicon.png";
//
// import "./assets/js/jquery.min.js";
// import "./assets/plugins/jquery-ui/jquery-ui.js";
// import "./assets/plugins/bootstrap/js/bootstrap.min.js";
// import "./assets/plugins/rs-plugin/js/jquery.themepunch.tools.min.js";
// import "./assets/plugins/rs-plugin/js/jquery.themepunch.revolution.min.js";
// import "./assets/plugins/selectbox/jquery.selectbox-0.1.3.min.js";
// import "./assets/plugins/owl-carousel/owl.carousel.js";
// import "./assets/js/waypoints.min.js";
// import "./assets/plugins/counter-up/jquery.counterup.min.js";
// import "./assets/plugins/isotope/isotope.min.js";
// import "./assets/plugins/isotope/jquery.fancybox.pack.js";
// import "./assets/plugins/isotope/isotope-triger.js";
// import "./assets/plugins/countdown/jquery.syotimer.js";
// import "./assets/plugins/velocity/velocity.min.js";
// import "./assets/plugins/smoothscroll/SmoothScroll.js";
// import "./assets/options/optionswitcher.js";
// import "./assets/js/custom.js";
// import "./assets/js/rocket-loader.min.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
