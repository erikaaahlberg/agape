<template>
<section id="services-page">
  <h2><i class="fas fa-angle-right"></i> Tjänster</h2>
  <div class="services-wrapper">    

    <div class="service-title">
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
    
    <div class="service-title">
      <h3>Tarot/runor</h3>
    </div>
        <div class="service-title">
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

    <div class="service-title">
      <h3>Föreläsning</h3>
    </div>

  </div>
</section>
</template>

<script>
  export default {
    name: 'Services'
  };
</script>

<style lang="scss">
  @import '@/scss/_main.scss';

#services-page{
  .services-wrapper{
    width: 100%;
    @include ipad-min {
      display: flex;
      flex-wrap: wrap;
    }
    .text-wrapper {
      flex-basis: 100%;
      background: $black;
      padding: 3rem;
      @include ipad-min {
        flex-basis: 50%;
        padding: 5rem;
      }
      h3{      
        font-size: 2rem;
        color: $white;
        letter-spacing: 0.3rem;
        border-bottom: 0.7rem solid black;
        display: inline-block;
        margin-bottom: 1.5rem;
        @include ipad-min {
          display: none;
        }
      }
    }
    .service-title{
        display: none;
      @include ipad-min {
        @include flex-center;
        flex-basis: 50%;
        h3{
          font-size: 2.5rem;
          color: $white;
          letter-spacing: 0.3rem;
          border-bottom: 1rem solid $black;
        }
      }
    }
  }
}

</style>
