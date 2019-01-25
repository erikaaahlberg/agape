<template>
  <div class="card card-black">
    <div class="wrapper-card-text">
      <i :class="icon"></i>
      <router-link to="/services">
        <h3>{{ title }}</h3>
      </router-link>
      <p>
        {{ description }}
        <a href="#" class="link-primary">Läs mer <i class="fas fa-angle-right"></i></a>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CardIcon',
    props: [
      'title',
      'description',
      'icon'
    ]
  };

</script>

<style lang="scss">
  @import '@/scss/_main.scss';

  .card-black {
    background: $black;

    i {
      font-size: 3em;
      color: $white;
      margin-bottom: 20px;
    }

    .wrapper-card-text {
      padding: 30px;
      text-align: center;

      @include medium-min {
        padding: 20px 30px;
      }

      a {
        margin: 0px;

        @media (max-width: 1200px) {
          display: block;
        }

        h3 {
          padding: 0px;
          margin: 0px;
          margin-bottom: 10px;
          color: $primaryBright;

          &:hover {
            color: $primary;
            transition: color .2s ease-in-out;
          }
        }
      }

      p {
        text-transform: none;
        color: $lightGrey;
      }
    }

    .btn-wrapper {
      text-align: center;
      padding: 10px 30px 50px 30px;

      a {
        display: inline-block;
        margin: 5px;
      }
    }
  }

</style>
