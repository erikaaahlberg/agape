// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

/* Buefy */
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultDayNames: ['Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör', 'Sön'],
  defaultUnselectableDaysOfWeek: ['Lör', 'Sön'],
  defaultTimeFormatter: 'HH:mm'
})
Vue.prototype.HOST = '/api';
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  /*render: h => h(App)*/
  router,
  components: { App },
  template: '<App/>'
});