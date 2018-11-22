<template>
<section class="hero">
  <div class="hero-body flex-center" id="top-hero-img">
      <div class="overlay">
    <div class="container">
      <h1 class="title">
        Karl Green
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
<style>
  #top-hero-img {
    background: url("../../images/hero-image2.jpg"); 
    background-size: cover;
    position: relative;
		height: 300px;
		text-align: left;
  }
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
    .title, 
    .subtitle{
    color: white;
    font-family: 'Hind', sans-serif;
    letter-spacing: 1.5px;
    }
</style>
