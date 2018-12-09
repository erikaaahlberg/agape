<template>
  <div class="card card-transparent">
    <div class="wrapper-card-text">
      <h3 class="news">{{ title }}</h3>
      <p>{{ description }}</p>
      <a class="btn-transparent">
        Fortsätt läsa 
        <i class="fas fa-angle-right"></i>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    data () {
      return {
        images: {
          hej: 'hej'
        }
      }
    },
		props: [ 
      'title',
      'description'
    ]
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
.card-transparent{
    background: transparent;
    flex-basis: 30%;
}
</style>
