import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import VueLazyload from 'vue-lazyload'
import vueSwiper from 'vue-awesome-swiper'

Vue.use(VueLazyload)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

Vue.use(vueSwiper)

import './styles/common.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
