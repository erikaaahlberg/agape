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


Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultDayNames: ['Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör', 'Sön'],
  defaultUnselectableDaysOfWeek: ['Lör', 'Sön'],
  defaultTimeFormatter: 'HH:mm'/*,
  defaultTimeParser: 'HH:mm'*/
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