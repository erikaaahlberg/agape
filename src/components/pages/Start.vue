<template>
  <section id="home">
    <h2><i class="fas fa-angle-right"></i> Tjänster</h2> 
    <services-part/>
    <h2><i class="fas fa-angle-right"></i> Aktuellt</h2> 
    <news-part/>
  </section>
</template>

<script>
  import ServicesPart from '@/components/partials/ServicesPart.vue';
  import NewsPart from '@/components/partials/NewsPart.vue';
  
  export default {
    name: 'Start',
		components: {
      'services-part': ServicesPart,
      'news-part': NewsPart
		}
  };
    /*export default {
        name: 'Home'
    };*/
    /*export default {
        name: 'Home',
  computed: {
    username () {
      // We will see what `params` is shortly
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/scss/_variables.scss';
#home{
  h2{
    width: 100%;
    background: $black;
    border-bottom: 1px solid $lightGrey;
    padding: 5px;
    padding-left: 30px;
  }
}
</style>
