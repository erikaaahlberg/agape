<template>
  <div class="flex-container">
    <div class="flex-wrapper">
      <div class="bg-img" :style="{ 
            'background': 'url(' + imgUrl + ')',
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'background-size': 'cover'
            }"></div>
      <section class="body-wrapper">
        <slot name="title"></slot>
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

<style lang="scss">
  @import '@/scss/_main.scss';

  .flex-container {
    @include section;

    .flex-wrapper {
      width: 100%;

      .bg-img {
        width: 100%;
        min-height: 40vw;
        height: auto;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        @include ipad-min {
          flex-basis: 50%;
        }
      }

      .body-wrapper {
        background: $black;
        flex-basis: 100%;
        padding: 3rem;

        h3 {
          text-align: center;
          margin-bottom: 1rem;
          padding-bottom: 0px;

          span {
            color: $secondary;
          }
        }

        @include ipad-min {
          flex-basis: 50%;
          padding: 5rem;
        }
      }

      @include ipad-min {
        display: flex;
      }
    }
  }

</style>
