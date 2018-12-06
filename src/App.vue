<template>
  <div id="app">
    <main-nav/>
    <hero/>
    <router-view/>
  </div>
</template>

<script>
import MainNav from './components/partials/MainNav'
import Hero from './components/sections/HeroImage'

export default {
  name: 'App',
  components: {
    'main-nav': MainNav,
    'hero': Hero
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Hind:400,600,700');
/*@import "~bulma/sass/utilities/_all";*/
@import '@/scss/_variables.scss';
@import '@/scss/_base.scss';
// Custom variables go here
$family-sans-serif: "Hind", sans-serif;
// Import Bulma and Buefy styles
/*@import "~bulma/sass/utilities/_all";
@import "~bulma";
@import "~buefy/src/scss/buefy";
@import '@/scss/_bulma.scss';*/

/* Global classes */
.flex-center{
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-wrapper{
  margin: 30px;
}
.section-padding{
  padding: 30px 50px;
}


#app {
  background: $black;
  font-family: 'Hind', sans-serif;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
</style>
