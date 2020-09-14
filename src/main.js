import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueQuagga from "vue-quaggajs";

Vue.config.productionTip = false;
Vue.use(VueQuagga);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
