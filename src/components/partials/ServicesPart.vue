<template>
 <section id="services-part">
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
  margin-top: 20px;
  margin-bottom: 20px;
.wrapper-cards{
  //background: $black;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
}
</style>
