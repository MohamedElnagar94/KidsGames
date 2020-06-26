import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { VBModal } from "bootstrap-vue";
// import HighchartsVue from 'highcharts-vue/dist/highcharts-vue'
// Note: Vue automatically prefixes the directive name with 'v-'
Vue.directive("b-modal", VBModal);
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Vue.use(HighchartsVue)

Vue.config.productionTip = false;
const dataauth = localStorage.getItem("auth");
new Vue({
  router,
  store,
  data: {
    auth: dataauth ? JSON.parse(dataauth) : {}
  },
  render: h => h(App)
}).$mount("#app");
