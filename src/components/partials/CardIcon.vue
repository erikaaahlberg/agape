  <template>
  <div class="card card-black">

    <!--<div class="wrapper-card-img">
      <img v-bind:src="imgUrl"/>
    </div>-->
      
    <div class="wrapper-card-text">
      <i :class="icon"></i> 
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
      <div class="btn-wrapper">
        <a href="#" type="button" class="btn-purple">Läs mer</a>
        <a href="#" type="button" class="btn-red">Boka tid</a>
      </div>

  </div>
  </template>

<script>
export default {
  name: 'CardIcon',
  props: [ 
    'title',
    'description',
    'icon'
  ]
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
<style lang="scss">
@import '@/scss/_variables.scss';

.card {
  flex-basis: 80%;
  margin: auto;
  margin-bottom: 30px;
  &.card-black{
    background: $black;
    i{
      font-size: 3em;
      color: $white;
      margin-bottom: 20px;
    }
  }
  @media (min-width: 768px) {
    flex-basis: 45%;
  }
  @media (min-width: 1200px){
    flex-basis: 25%;
  }

  .wrapper-card-img {
    width: 100%;
    img {
      width: 100%;
      overflow: hidden;
      margin: auto;
    }
  }
  .wrapper-card-text {
    padding: 30px 30px 10px 30px;
    text-align: center;
    @media (min-width: 768px) {
      padding: 40px 50px 10px 50px;
    }

    h3 {
      padding: 0px;
      margin: 0px;
      color: $white;
      margin-bottom: 10px;
    }

    p {
      text-transform: none;
      color: $lightGrey;
    }

    a{
      margin: 5px;
      margin-top: 20px;
      margin-bottom: 10px;
    }
  }
  .btn-wrapper{
    padding: 0px 0px 40px 0px;
    @media(min-width: 768px){
    padding: 0px 0px 50px 0px;
    }
  }
}

.card-news {
  background: transparent;
  flex-basis: 30%;

  h3 {
    color: $white;
  }
}

</style>
