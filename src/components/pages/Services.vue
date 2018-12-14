<template>
<section id="services-page">
  <h2><i class="fas fa-angle-right"></i> Tjänster</h2>
  <div class="services-wrapper">    

    <div class="service-title flex-center c-red">
      <h3>Coaching</h3>
    </div>
    <div class="text-wrapper">
      <p>Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul. Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul.</p>
      <p>Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul. Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul. Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul.</p>
    </div>

    <div class="text-wrapper">
      <p>Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul. Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul.</p>
      <p>Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul. Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul. Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul.</p>
    </div>

    <!--<div class="bg-img" :style="{ 
      'background': 'url(' + images.img2 + ')',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
     }">
    </div>

    <div class="bg-img" :style="{ 
      'background': 'url(' + images.img1 + ')',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
     }">
    </div>-->
    <div class="service-title flex-center c-purple">
      <h3>Tarot/runor</h3>
    </div>
        <div class="service-title flex-center c-red">
      <h3>Workshop</h3>
    </div>
    <div class="text-wrapper">
      <p>Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul. Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul.</p>
      <p>Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul. Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul. Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul.</p>
    </div>

    <div class="text-wrapper">
      <p>Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul. Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul.</p>
      <p>Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul. Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul. Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul.</p>
    </div>

    <div class="service-title flex-center c-purple">
      <h3>Föreläsning<br/>
      <i class="fas fa-bullseye"></i>
      <i class="fas fa-burn"></i>
      <i class="far fa-eye"></i>
      <i class="fas fa-child"></i>
      </h3>
    </div>
<!--
    <div class="wrapper-cards">
      <service-card 
      title="Coaching" 
      description="Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul."
      :imgUrl="images.img1"/>

      <service-card title="Tarot/Runor" 
      description="Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul."
      :imgUrl="images.img2"/>

      <service-card title="Workshop" 
      description="Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul."
      :imgUrl="images.img3"/>

      <service-card title="Föreläsning" 
      description="Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul."
      :imgUrl="images.img1"/>
    </div>-->
  </div>
</section>
</template>

<script>
  export default {
    name: 'ServicesPart',
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
			'hej': 'hej'
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../scss/_variables.scss';

#services-page{
  .services-wrapper{
    display: flex;
    flex-wrap: wrap;
  }
  .bg-img{
    width: 100%;
    flex-basis: 50%;
  }
  .text-wrapper{
    flex-basis: 50%;
    background: $black;
    padding: 30px;
    p{
      text-transform: none;
      margin-bottom: 15px;
    }
  }
  .c-red{
    h3{
      border-bottom: 10px solid $red;
      letter-spacing: 2px;
    }
  }
  .c-purple{
    h3{
      border-bottom: 10px solid $primary;
      letter-spacing: 2px;
      text-align: center;
    }
  }
  .service-title{
    flex-basis: 50%;
    h3{
      font-size: 4em;
      color: $white;
    }
  }
}

</style>
