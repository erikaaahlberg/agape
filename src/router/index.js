import Vue from 'vue';
import Router from 'vue-router';
import Start from '../components/pages/Start.vue';
import About from '../components/pages/About.vue';
import Book from '../components/pages/Book.vue';
import Contact from '../components/pages/Contact.vue';
import Art from '../components/pages/Art.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/art',
      name: 'Art',
      component: Art
    },
  ],
});

/*const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router
}).$mount('#app')*/