<template>
  <div class="card card-transparent">
    <div class="card-img" 
    :style="{ 
      'background': 'url(' + imgUrl + ')',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
     }">
    </div>
    <div class="wrapper-card-text">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
        <a :href="link" class="link-green">
          Gå vidare till facebook 
          <i class="fas fa-angle-right"></i>
        </a>
    </div>
  </div>
</template>

<script>

      /*<h5 class="sub-title">{{ date }} {{ time }} {{ place }}</h5>*/
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
      'imgUrl',
      'link'
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
@import '@/scss/_main.scss';
.card{
  .wrapper-card-text {
    //padding: 30px 30px 10px 30px;
    padding: 30px;
    text-align: center;
    @media (min-width: 768px) {
      //padding: 40px 50px 10px 50px;
    }
    /*h3 {
      padding: 0px;
      margin: 0px;
      color: $primaryBright;
      margin-bottom: 10px;
    }*/
    p {
      text-transform: none;
      color: $lightGrey;
    }
    a.link-green{
      margin: 5px;
      margin-bottom: 0px;
      /*margin-top: 20px;
      margin-bottom: 10px;*/
    }
  }    
}

.card-transparent{
    background: transparent;
    display: flex;
    flex-wrap: wrap;
  .card-img{
    /*@media(max-width: 768px){
      //display: none;
      flex-basis: 100%;
      max-width: 400px;
    }*/
    width: 100%;
    flex-basis: 50%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  h3{
    color: $white;
    margin: 0px;
    //font-size: 1.5em;
  }
  .wrapper-card-text{
    flex-basis: 100%;
    text-align: left;
    p{
      margin-top: 10px;
      margin-bottom: 10px;
    }
    @media(min-width: 768px){
      flex-basis: 50%;
    }
  }
}
</style>
