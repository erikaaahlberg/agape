<template>
 <section id="carousel-part" class="section-padding">
    <carousel :data="[slides, 'slide2']"></carousel>
</section>
</template>

<script>
import NewsPart from './NewsPart.vue';

  export default {
    name: 'ServicesPart',
    data () {
      return {
        data: {
          hej: 'hej'
        }
      }
    },
		components: {
			'service-card': CardImage
    }
    /*,
    mounted: {
      beforeCreate: function () {
        this.$options.components.Card = require('@/components/partials/Card.vue').default
      }
    }*/
  };
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
.wrapper-cards{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>
