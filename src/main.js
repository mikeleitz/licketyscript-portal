import Vue from 'vue'
import VueGtag from "vue-gtag";
import VueMeta from 'vue-meta'

import router from './router'
import App from './App.vue'

import '@/assets/tailwind.css'

Vue.config.productionTip = false

Vue.use(VueMeta)

Vue.use(VueGtag, {
  config: { id: "G-85RLFGC4JQ" }
}, router);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
