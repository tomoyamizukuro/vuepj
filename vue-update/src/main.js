import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import axios from 'axios'

axios.interceptors.request.use(config => {
  console.log('Request Interceptor' + config);
  return config
})
axios.interceptors.response.use( res=> {
  console.log('Response Interceptor' +  res);
  return res
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
