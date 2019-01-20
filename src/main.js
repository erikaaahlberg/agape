// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueSession from 'vue-session';
Vue.use(VueSession);

/* Buefy */
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

/* Vee validate */
import VeeValidate from 'vee-validate';

/* Slider */
import VueCarousel from '@chenfengyuan/vue-carousel';


//import axios from 'axios'
//import VueAxios from 'vue-axios'
 
//Vue.use(VueAxios, axios);


Vue.use(VeeValidate, {
  events: ''
});

Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultDayNames: ['Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör', 'Sön'],
  defaultUnselectableDaysOfWeek: ['Lör', 'Sön'],
  defaultTimeFormatter: 'HH:mm'
})

//Vue.prototype.HOST = '/api';
//Vue.config.productionTip = false;
//Vue.component(VueCarousel.name, VueCarousel);
/* eslint-disable no-new */
/*router.beforEach((to, from, next) => {
  const reqSession = to.matched.some(route => route.meta.requiresSession)
  if (!reqSession) next()

  if (router.app.$session.exists()) {
    next();
  } else {
    next({ path: '/' });
  }
});*/

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
});