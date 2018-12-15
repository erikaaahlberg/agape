<template>
 <section id="services-part" class="section-margin">
    <div class="wrapper-cards">
      <service-card 
      title="Coaching" 
      description="Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul."
      :icon="icons.icon1"/>

      <service-card title="Tarot/Runor" 
      description="Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul."
      :icon="icons.icon2"/>

      <service-card title="Workshop" 
      description="Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul."
      :icon="icons.icon3"/>

      <service-card title="Föreläsning" 
      description="Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul."
      :icon="icons.icon4"/>
    </div>
	</section>
</template>

<script>
  import CardIcon from '@/components/partials/CardIcon';
  export default {
    name: 'ServicesPart',
    data () {
      return {
        images: {
          img1: require('@/assets/images/card-image1.jpg'),
          img2: require('@/assets/images/card-image2.jpg'),
          img3: require('@/assets/images/card-image3.jpg'),
          img4: require('@/assets/images/card-image1.jpg')
        },
        icons: {
          icon1: 'fas fa-child',
          icon2: 'far fa-eye',
          icon3: 'fas fa-burn',
          icon4: 'fas fa-bullseye'
        }
      }
    },
		components: {
			'service-card': CardIcon
    }
  };
    /*,
    mounted: {
      beforeCreate: function () {
        this.$options.components.Card = require('@/components/partials/Card.vue').default
      }
    }*/
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
#services-part{
  @media (min-width: 1200px){
    border-top: 1px solid $redBright;
    border-bottom: 1px solid $primaryBright; 
  }
.wrapper-cards{
  margin: 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .card-black {
      flex-basis: 80%;
      margin: auto;
      background: $black;
      @media (max-width: 1200px){
        border-top: 1px solid $redBright;
        border-right: 1px solid $primaryBright;
        border-bottom: 1px solid $redBright;
        border-left: 1px solid $primaryBright;
        &:nth-child(1){
          margin-bottom: 30px;
        }
        &:nth-child(1){
          margin-bottom: 30px;
        }
        &:nth-child(2){
          margin-bottom: 30px;
        }
      }
    i{
      font-size: 3em;
      color: $white;
      margin-bottom: 20px;
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
  }
  .btn-wrapper{
    text-align: center;
    padding: 0px 0px 40px 0px;
    a{
      margin: 5px;
      margin-top: 20px;
      margin-bottom: 10px;
    }
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
}
}
</style>
