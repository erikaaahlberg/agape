<template>
<section id="hero">
  <div class="hero-body flex-center" id="top-hero-img">
      <div class="overlay">
    <div class="container">
      <h1>
        <i class="fas fa-angle-right"></i> Karl Green
      </h1>
      <h2 class="subtitle">
        Människa & vägledare på jorden
      </h2>
    </div>
    </div>
  </div>
</section>
</template>

<script>
    export default {
        name: 'hero',
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/scss/_variables.scss';

  #top-hero-img {
    background: url("../../../images/hero-image2.jpg"); 
    background-size: cover;
    position: relative;
		height: 320px;
    text-align: left;
    .container{
      margin-top: 200px;
      display: inline-block;
      padding-left: 50px;
    }
    .overlay{
        position: absolute;
        background: rgba(0, 0, 0, 0.543);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    } 
    .subtitle{
      font-weight: 400;
      color: white;
    }
    i.fa-angle-right{
      color: $red;
      font-size: 1.1em;
      position: relative;
      bottom: -4px;
    }
  }
</style>
