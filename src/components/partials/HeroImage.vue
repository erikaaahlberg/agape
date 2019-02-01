<template>
  <section id="main-hero">
    <div class="hero-img">
      <div class="overlay"></div>
      <div class="title-container">
        <h1>Karl Green</h1>
        <h3>
          <p>Människa &</p> 
          <p>vägledare</p> 
          <p>på jorden</p>
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

<style lang="scss">
@import '@/scss/_main.scss';

  #main-hero {  
    .hero-img{
      background: url("../../assets/images/karl.jpg"); 
      background-size: cover;
      background-position: center;
      position: relative;
      min-height: calc(70vh - 3.25rem);

      @include small-min {
        min-height: calc(90vh - 3.25rem);
      }

      @include mobile-portrait-max {
        min-height: calc(50vh - 3.25rem);
      }

      .overlay{
        position: absolute;
        background: rgba(0, 0, 0, 0.543);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      } 

      .title-container{
        width: 50%;
        position: relative;
        top: 1rem;
        left: 1rem;
        opacity: 0.3;
        color: rgb(177, 168, 134);

        @include ipad-min {
          left: 2rem;
        }

        h1 {
          font-size: 2.1rem;
          letter-spacing: 0.12rem;
          font-weight: 400;
          display: inline-block;
          margin-bottom: 1rem;
          border-bottom: 0.5rem solid rgb(177, 168, 134);
          hyphens: none;

          @include mobile-portrait-max {
            font-size: 2rem;
          }
          @include small-min {
            font-size: 3rem;
          }
        }
        p {
          font-size: 1.3rem;
          margin-top: 0rem;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.12rem;

          @include small-min {
            margin-top: 0.5rem;
            font-size: 2rem;
          }
        }

      }
    }
  }
</style>
