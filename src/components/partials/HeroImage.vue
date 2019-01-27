<template>
<section id="hero-img" class="hero is-link is-fullheight-with-navbar">
  <div class="hero-body">
    <div class="overlay"></div>
    <div class="container">
      <!--
      <h1>Karl Green</h1>
      <h3>
        Människa & vägledare på jorden
      </h3>
      -->
    </div>
  </div>
</section>
</template>

<script>
  export default {
    name: 'HeroImage'
  };
</script>

<style lang="scss">
@import '@/scss/_main.scss';

  #hero-img {  
    .hero.is-fullheight-with-navbar {
      min-height: calc(80vh - 3.25rem);

      @include ipad-min {
        min-height: calc(90vh - 3.25rem);
      }
    }
    
    .hero-body{
      background: url("../../assets/images/karl.jpg"); 
      background-size: cover;
      position: relative;
      text-align: left;

      .overlay{
        position: absolute;
        background: rgba(0, 0, 0, 0.543);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      } 

      .container{
        position: relative;
        margin-bottom: 3rem;
        margin-left: 3rem;

        @include ipad-min {
          margin-bottom: -40rem;
        }
      }
    }
  }
</style>
