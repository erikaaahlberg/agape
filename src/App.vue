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
  @import '@/scss/_main.scss';

  $hind: 'Hind', sans-serif;

  /* ---------- Global classes ---------- */
  /* Grid */
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Margins and paddings */
  .content-wrapper {
    margin: 3rem;
  }

  /* Buttons */
  .btn-primary {
    @include button($primaryBright, $black, $primary, $white);
  }

  .btn-secondary {
    @include button($secondaryBright, $black, $secondary, $white);
  }


  /* Links */
  .link-primary {
    @include link ($primaryBright, $primary);
  }
  
  .link-secondary {
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
    font-family: $hind;
    text-transform: uppercase;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $white;
  }

</style>