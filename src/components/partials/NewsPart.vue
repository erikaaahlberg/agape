<template>
	<section class="news-part">
    <div class="wrapper-news-cards">
      <news-card 
      title="Projekt" 
      date="Söndag 23/01/2019"
      time="19.30"
      place="Nacka"
      description="Karl har en del projekt igång som involverar musik och annan konst. Det är alltid mycket som händer och alla uppdateringar postas dagligen på facebook."
      :imgUrl="images.img1"
      link="https://www.facebook.com/thewisdomofaman"/>
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
          img1: require('@/assets/images/card-image1.jpg'),
          img2: require('@/assets/images/card-image2.jpg'),
          img3: require('@/assets/images/card-image3.jpg'),
          img4: require('@/assets/images/card-image1.jpg')
        }
      }
    },
		components: {
			'news-card': Card
    }
  };
</script>

<style lang="scss">
@import '@/scss/_main.scss';

.news-part {
  @include section;

  .wrapper-news-cards{
    width: 100%;
    text-align: center;
  }
}
</style>
