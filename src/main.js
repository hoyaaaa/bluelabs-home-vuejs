import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import vuenumber from './plugins/vuenumber'
import swiper from './plugins/swiper'

import './main.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  vuenumber,
  swiper,
  render: h => h(App)
}).$mount('#app')
