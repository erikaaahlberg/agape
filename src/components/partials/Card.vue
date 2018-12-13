<template>
  <div class="card card-transparent">
    <div class="card-img" :style="{ 
      'background': 'url(' + imgUrl + ')',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-cover': 'cover'
     }">
    </div>
    <div class="wrapper-card-text">
      <h3>{{ title }}</h3>
      <h5 class="sub-title">{{ date }} {{ time }} {{ place }}</h5>
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
      'description',
      'date',
      'time',
      'place',
      'imgUrl'
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
.card{
  h5{
    color: $redBright;
    font-size: 1.1em;
  }
}
.card-transparent{
    background: transparent;
    display: flex;
    margin: 50px auto;
    width: 80%;
  .card-img{
    width: 100%;
    flex-basis: 50%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .wrapper-card-text{
    flex-basis: 50%;
    text-align: left;
    /*h3{
      color: $primaryBright;
    }*/
  }
}
</style>
