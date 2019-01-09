<template>
<section id="services-page">
  <h2><i class="fas fa-angle-right"></i> Tjänster</h2>
  <div class="services-wrapper">    

    <div class="service-title flex-center">
      <h3>Coaching</h3>
    </div>
    <div class="text-wrapper">
      <h3>Coaching</h3>
      <p>Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul. Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul.</p>
      <p>Vi viker dina kläder hur du vill, när du vill.</p>
    </div>

    <div class="text-wrapper">
      <h3>Tarot/runor</h3>
      <p>Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul. Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul.</p>
      <p>Vi viker dina kläder hur du vill, när du vill.</p>
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
    <div class="service-title flex-center">
      <h3>Tarot/runor</h3>
    </div>
        <div class="service-title flex-center">
      <h3>Workshop</h3>
    </div>
    <div class="text-wrapper">
      <h3>Workshop</h3>
      <p>Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul. Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul.</p>
      <p>Vi viker dina kläder hur du vill, när du vill.</p>
    </div>

    <div class="text-wrapper">
      <h3>Föreläsning</h3>
      <p>Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul. Vi viker dina kläder hur du vill, när du vill. Ring när som helst. Snabbt, långsamt eller mitt emellan - men framför allt kul.</p>
      <p>Vi viker dina kläder hur du vill, när du vill.</p>
    </div>

    <div class="service-title flex-center">
      <h3>Föreläsning</h3>
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
    name: 'Services',
    /*data () {
      return {
        images: {
          img1: require('../../assets/images/card-image1.jpg'),
          img2: require('@/assets/images/card-image2.jpg'),
          img3: require('@/assets/images/card-image3.jpg'),
          img4: require('@/assets/images/card-image1.jpg')
        }
      }
    },*/
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
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .bg-img{
    width: 100%;
    flex-basis: 100%;
    @media (min-width: 768px){
      flex-basis: 50%;
    }
  }
  .text-wrapper{
    flex-basis: 100%;
    background: $black;
    padding: 30px;
    p{
      //text-transform: uppercase;
      line-height: 2;
    }
    h3{      
      font-size: 2em;
      color: $white;
      letter-spacing: 3px;
      border-bottom: 10px solid black;
      display: inline-block;
      margin-bottom: 15px;
      }
    @media (min-width: 768px){
      flex-basis: 50%;
      padding: 100px;
      h3{
        display: none;
      }
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
    @media (max-width: 768px){
      display: none;
    }
    flex-basis: 50%;
    h3{
      font-size: 4em;
      color: $white;
      letter-spacing: 3px;
      border-bottom: 10px solid $black;
    }
    /*
    &:nth-child(odd){
      
      background: $redBright;
      color: $black;
      color: $redBright;
    }
    &:nth-child(even){
      background: $primaryBright;
      color: $black;
      h3{
        color: $primaryBright;
      }
    }*/
  }
}

</style>
