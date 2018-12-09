<template>
	<section class="news-part">
    <div class="wrapper-cards">
      <news-card 
      title="Coaching" 
      description="Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul."
      :imgUrl="images.img1"/>

      <news-card title="Tarot/Runor" 
      description="Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul."/>

      <news-card title="Workshop" 
      description="Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul."/>
    </div>
	</section>
</template>

<script>
  import Card from '@/components/partials/Card.vue';
  export default {
    name: 'NewsPart',
    data () {
      return {
        images: {
          hej: 'hej'
        }
      }
    },
		components: {
			'news-card': Card
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
