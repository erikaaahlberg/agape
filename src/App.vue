<template>
  <div id="app">
    <main-nav/>
    <hero/>
    <router-view/>
  </div>
</template>

<script>
import MainNav from '@/components/partials/MainNav'
import Hero from '@/components/partials/HeroImage'

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
@import '@/scss/_mixins.scss';
// Custom variables go here
$family-sans-serif: "Hind", sans-serif;
// Import Bulma and Buefy styles
/*@import "~bulma/sass/utilities/_all";
@import "~bulma";
@import "~buefy/src/scss/buefy";
@import '@/scss/_bulma.scss';*/

/* ---------- Global classes ---------- */
/* Grid */
.flex-center{
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Margins and paddings */
.content-wrapper{
  margin: 30px;
}
.section-padding{
  padding: 30px 50px;
  max-width: 1400px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 50px;
}

/* Buttons */
.btn-purple {
  @include button($primaryBright, $black, 'transparent', $primary, $white, 'transparent');
}
.btn-red{
  @include button($redBright, $black, 'transparent', $red, $white, 'transparent');
}
.btn-transparent{
  @include button('transparent', $white, $primaryBright, 'transparent', $lightGrey, $primary);
}

#app {
  background: black;
  font-family: 'Hind', sans-serif;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $white;
}
</style>
