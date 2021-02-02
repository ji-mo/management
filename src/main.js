import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Cookie from './assets/js/cookie';
import api from './api/index';
import Toast from './components/Toast';

const moneySer = require('./utils/services/moneyService');

Vue.config.productionTip = false;
Vue.prototype.Cookie = Cookie;
Vue.prototype.$api = api;
Vue.prototype.$Toast = Toast;
Vue.prototype.$money = moneySer;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
