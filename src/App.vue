<template>
  <div id="app">
    <page-nav/>
    <hero/>
    <router-view/>
    <page-footer/>
  </div>
</template>

<script>
import PageNav from '@/components/partials/PageNav';
import Hero from '@/components/partials/HeroImage';
import PageFooter from '@/components/partials/PageFooter';

export default {
  name: 'App',
  components: {
    'page-nav': PageNav,
    'hero': Hero,
    'page-footer': PageFooter
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
.section-margin{
  margin-top: 20px;
  margin-bottom: 20px;
}

/* Display */
.hidden{
  display: none;
}

/* Buttons */
.btn-purple {
  @include button($primaryBright, $black, 'transparent', $primary, $white, 'transparent');
}
.btn-red{
  @include button($redBright, $black, 'transparent', $red, $white, 'transparent');
}
.btn-transparent{
  @include button('transparent', $white, $primary, 'transparent', $primary, $primary);
}

/* Links */
.link-green{
  color: $primaryBright;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: none;
  i.fa-angle-right{
    position: relative;
    bottom: -2px;
    color: $redBright;
    font-size: 1.2em;
  }
  &:hover{
    color: $primary;
    i.fa-angle-right{
      color: $red;
    }
  }
}
/* Text color */
.c-green{
  color: $primary;
}
.c-green-bright{
  color: $primaryBright;
}
.c-red{
  color: $red;
}
.c-red-bright{
  color: $redBright;
}

#app {
  background: black;
  font-family: 'Hind', sans-serif;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $white;

  h2{
    width: 100%;
    background: $black;
    border-bottom: 1px solid $lightGrey;
    padding: 5px;
    padding-top: 10px;
    padding-left: 30px;
  }
}
</style>
