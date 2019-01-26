<template>
  <div class="card-img">
    <div class="container-img" 
    :style="{ 
      'background': 'url(' + imgUrl + ')',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
     }">
    </div>
    <div class="container-text">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
        <a :href="link" class="link-primary">
          Gå vidare till facebook 
          <i class="fas fa-angle-right"></i>
        </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    data () {
      return {
        images: {
          hej: 'hej'
        }
      }
    },
    props: [ 
      'title',
      'description',
      'date',
      'time',
      'place',
      'imgUrl',
      'link'
    ]
  };
</script>

<style lang="scss">
@import '@/scss/_main.scss';

.card-img {
  background: transparent;
  display: flex;
  flex-wrap: wrap;

  .container-img {
    width: 100%;
    flex-basis: 100%;
    min-height: 40vw;
    height: auto;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @include ipad-min {
      flex-basis: 50%;
    }
  }

  h3 {
    color: $white;
    margin: 0rem;
  }

  .container-text {
    @include container-padding;
    flex-basis: 100%;
    text-align: left;
    background: $black;

    p {
      margin-top: 1rem;
      margin-bottom: 1.5rem;
      text-transform: none;
      color: $lightGrey;
    }

    @include ipad-min {
      flex-basis: 50%;
    }

    .link-primary {
      margin-bottom: 0rem;
    }
  }

  /*.wrapper-card-text {
    padding: 3rem;
    text-align: center;
    
    @include ipad-min {
      padding: 4rem 5rem 1rem 5rem;
    }
  }*/


      
}

/*.card-img {
    background: transparent;
    display: flex;
    flex-wrap: wrap;


}*/
</style>
