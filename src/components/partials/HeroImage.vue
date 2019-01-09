<template>
<section id="hero-img" class="hero is-link is-fullheight-with-navbar">
  <div class="hero-body">
    <div class="overlay"></div>
    <div class="container">
      <h1>Karl Green</h1>
      <h3>
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

  #hero-img {
    .hero-body{
      background: url("../../assets/images/karl.jpg"); 
      background-size: cover;
      position: relative;
      text-align: left;
      //display: block;
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
        margin-bottom: 30px;
        margin-left: 30px;
        @media(min-width: 768px){
          margin-bottom: -400px;
        }
      }
    }
  }
</style>
