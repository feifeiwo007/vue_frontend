import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App1.vue";
import VueRouter from "vue-router";
import routes from "./router";
import axios from "axios";
import store from "./store";

Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
