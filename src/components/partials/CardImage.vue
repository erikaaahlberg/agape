  <template>
  <div class="card card-black">

    <div class="wrapper-card-img">
      <img v-bind:src="imgUrl"/>
    </div>
      
    <div class="wrapper-card-text">
      <h3>{{title}}</h3>
      <p>{{description}}</p>
      <a href="#" type="button" class="btn-purple">Läs mer</a>
      <a href="#" type="button" class="btn-red">Boka tid</a>
    </div>

  </div>
  </template>

<script>
export default {
  name: 'CardImage',
    props: [ 
      'title',
      'description',
      'imgUrl'
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
  }
  @media (min-width: 768px) {
    flex-basis: 45%;
  }
  @media (min-width: 1200px){
    flex-basis: 40%;
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
    padding: 30px;
    text-align: center;
    @media (min-width: 768px) {
      padding: 40px 50px;
    }

    h3 {
      padding: 0px;
      margin: 0px;
      color: $white;
      margin-bottom: 10px;
    }

    p {
      text-transform: none;
      line-height: 1.6;
      letter-spacing: 1.5px;
      font-size: 1em;
      color: $lightGrey;
    }

    a{
      margin: 5px;
      margin-top: 20px;
      margin-bottom: 10px;
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
