<template>
<section id="hero-img" class="hero is-link is-fullheight-with-navbar">
  <div class="hero-body" id="top-hero-img">
    <div class="overlay"></div>
    <div class="container">
      <h1>Karl Green</h1>
      <h3 class="hej">
        Människa & vägledare på jorden
      </h3>
    </div>
  </div>
</section>
</template>

<script>
    export default {
        name: 'HeroImage'
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/scss/_variables.scss';

  #top-hero-img {
    background: url("../../assets/images/karl.jpg"); 
    background-size: cover;
    position: relative;
		/*height: 100%;
    min-height: 400px;
    max-height: 500px;*/
    text-align: left;
    /*.container{
      margin-top: 200px;
      display: inline-block;
      padding-left: 50px;
    }*/
    .overlay{
        position: absolute;
        background: rgba(0, 0, 0, 0.543);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    } 
    .container{
      margin-bottom: -400px;
      margin-left: 30px;
    }
    .subtitle{
      font-weight: 400;
      color: white;
    }
    /*i.fa-angle-right{
      color: $red;
      font-size: 1.1em;
      position: relative;
      bottom: -4px;
    }*/
  }
</style>
