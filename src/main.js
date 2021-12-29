import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
import routes from "./routes";

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import axios from "axios";

import { qtyFilter } from "./services/filters";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(axios);

Vue.filter("qty", qtyFilter);

const router = new VueRouter({ routes });

new Vue({
  el: "#app",
  render: h => h(App),
  router
});
