<template>
 <section class="services-part">
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
          icon1: 'fas fa-child top',
          icon2: 'far fa-eye top',
          icon3: 'fas fa-burn top',
          icon4: 'fas fa-bullseye top'
        }
      }
    },
		components: {
			'service-card': CardIcon
    }
  };
</script>

<style lang="scss">
@import '@/scss/_main.scss';

.services-part{
  @include section;

  @include medium-min {
    padding: 0rem;
  }

  .intro-text{
    p{
      text-transform: uppercase;
      padding: 5rem 3rem 1rem 3rem;
      text-align: center;
      font-size: 1.5rem;
      margin: auto;
      width: 90%;

      @include ipad-min{
        width: 80%;
        max-width: 70rem;
      }
    }
  }

  .wrapper-cards {
    margin: 0rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @include medium-min {
      flex-wrap: nowrap;
    }

    .card-icon {
      flex-basis: 100%;

      &:not(:last-child) {
        margin-bottom: 3rem;
      }

      @include ipad-min{
        flex-basis: 45%;

        &:nth-child(3){
          margin-bottom: 0rem;
        }
      }

      @include medium-min {
        flex-basis: 25%;
        margin: 0rem;

        &:nth-child(1){
          margin-bottom: 0rem;
        }
        
        &:nth-child(2){
          margin-bottom: 0rem;
        }
      }
    }
  }
}
</style>
