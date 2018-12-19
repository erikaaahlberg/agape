// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

/* Buefy */
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

/* Slider */
import VueCarousel from '@chenfengyuan/vue-carousel';


import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate, {
  events: ''
});

Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultDayNames: ['Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör', 'Sön'],
  defaultUnselectableDaysOfWeek: ['Lör', 'Sön'],
  defaultTimeFormatter: 'HH:mm'
})

Vue.prototype.HOST = '/api';
Vue.config.productionTip = false;
Vue.component(VueCarousel.name, VueCarousel);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  /*render: h => h(App)*/
  router,
  components: { App },
  template: '<App/>'
});