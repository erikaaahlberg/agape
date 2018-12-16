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
      margin-bottom: -400px;
      margin-left: 30px;
    }
  }
</style>
