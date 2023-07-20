import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './plugins/element.js'
import axios from 'axios'


Vue.config.productionTip  =  false
Vue.prototype.$axios = axios
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Encoding'] = 'charset=UTF-8'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://localhost:8987/'

window.jQuery = require('jquery')

new Vue({
  router,
  store,
  render: h  => h(App)
}).$mount('#app')

