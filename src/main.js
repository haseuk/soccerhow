import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

import VueRouter from 'vue-router';
import Vuex from 'vuex';

import router from './router.js';
import VueCookies from 'vue-cookies'
import axios from 'axios'

console.log(process.env);

Vue.use(Vuex);

Vue.use(VueRouter);
Vue.use(VueCookies);

window.copyObject = function(obj){
  return JSON.parse(JSON.stringify(obj));
};

axios.interceptors.request.use(function (config) {
  // store.commit('showProgress');
  return config;
}, function (error) {
  // store.commit('hideProgress');
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {

  return Promise.reject(error);
});

axios.defaults.headers.common = {
  // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
  'X-Requested-With': 'XMLHttpRequest'
};

axios.defaults.withCredentials = true;

new Vue({
  router : router,
  render: h => h(App),
}).$mount('#app')
