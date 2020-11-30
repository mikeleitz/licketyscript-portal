import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag";

import './assets/tailwind.css'

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: "G-85RLFGC4JQ" }
}, router);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
