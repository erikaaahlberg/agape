<template>
  <div id="app">
    <trust-bar/>
    <main-nav />
    <hero />
    <router-view />
    <main-footer />  
  </div>
</template>

<script>
  import TrustBar from '@/components/partials/TrustBar.vue';
  import MainNav from '@/components/partials/MainNav.vue';
  import Hero from '@/components/partials/HeroImage.vue';
  import MainFooter from '@/components/partials/MainFooter.vue';

  export default {
    name: 'App',
    components: {
      'trust-bar': TrustBar,
      'main-nav': MainNav,
      'hero': Hero,
      'main-footer': MainFooter
    }
  };

</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Hind:400,600,700');
  /*@import "~bulma/sass/utilities/_all";*/
  @import '@/scss/_main.scss';
  @import '@/scss/_base.scss';
  @import '@/scss/_main.scss';
  // Custom variables go here
  $family-sans-serif: "Hind",
  sans-serif;
  // Import Bulma and Buefy styles
  /*@import "~bulma/sass/utilities/_all";
@import "~bulma";
@import "~buefy/src/scss/buefy";
@import '@/scss/_bulma.scss';*/

  /* ---------- Global classes ---------- */
  /* Grid */
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Margins and paddings */
  .content-wrapper {
    margin: 30px;
  }

  .section-padding {
    padding: 30px 50px;
    max-width: 1400px;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 50px;
  }

  .section-margin {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  /* Buttons */
  .btn-purple {
    @include button($primaryBright, $black, $primary, $white);
  }

  .btn-red {
    @include button($secondaryBright, $black, $secondary, $white);
  }

  .btn-transparent {
    @include button($white, $primary, $primary, $primary);
  }

  /* Links */
  .link-green {
    @include link ($primaryBright, $primary);
    /*
    color: $primary;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: none;
    i.fa-angle-right {
      position: relative;
      bottom: -2px;
      color: $secondaryBright;
      font-size: 1.2em;
    }
    &:hover {
      color: $primaryBright;
      i.fa-angle-right {
        color: $secondary;
      }
    }
    */
  }
  
  .link-red {
    @include link ($secondaryBright, $secondary);
  }

  /* Text color */
  .c-green {
    color: $primary;
  }

  .c-green-bright {
    color: $primaryBright;
  }

  .c-red {
    color: $secondary;
  }

  .c-red-bright {
    color: $secondaryBright;
  }

  /* Display */
  .hidden {
    display: none;
  }

  #app {
    background: black;
    font-family: 'Hind', sans-serif;
    text-transform: uppercase;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $white;

    h2 {
      width: 100%;
      background: $black;
      border-bottom: 1px solid $lightGrey;
      padding: 5px;
      padding-top: 10px;
      padding-left: 30px;
    }

    i.fa-angle-right{
        color: $secondary;
    }
  }

</style>
