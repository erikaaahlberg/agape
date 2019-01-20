<template>
  <div class="section-padding">
    <div class="flex-wrapper">
      <div class="bg-img" :style="{ 
            'background': 'url(' + imgUrl + ')',
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'background-size': 'cover'
            }"></div>
      <section class="body-wrapper">
        <slot name="body"></slot>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FlexContainer',
    props: [
      'imgUrl'
    ]
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '@/scss/_main.scss';

 .flex-wrapper {
      width: 100%;
      .bg-img {
        width: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      @media(min-width: 768px) {
        display: flex;

        .bg-img {
          flex-basis: 50%;
        }

        .body-wrapper {
          background: $black;
          flex-basis: 50%;
          padding: 50px;
        }
      }
    }

</style>
