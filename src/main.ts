/*
 * @FileDescription:
 * @Author: 李永创
 * @Date: 2021-09-17 17:44:57
 * @LastEditors: 李永创
 * @LastEditTime: 2021-09-17 17:53:04
 */
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
