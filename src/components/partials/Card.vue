<template>
  <div class="card card-transparent">
    <div class="card-img" 
    :style="{ 
      'background': 'url(' + imgUrl + ')',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
     }">
    </div>
    <div class="wrapper-card-text">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
        <a :href="link" class="link-primary">
          Gå vidare till facebook 
          <i class="fas fa-angle-right c-red"></i>
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

.card {
  
  .wrapper-card-text {
    padding: 3rem;
    text-align: center;
    
    @include ipad-min {
      //padding: 40px 50px 10px 50px;
    }

    p {
      text-transform: none;
      color: $lightGrey;
    }

    .link-primary {
      margin-bottom: 0rem;
    }
  }    
}

.card-transparent{
    background: transparent;
    display: flex;
    flex-wrap: wrap;

  .card-img{
    width: 100%;
    flex-basis: 50%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  h3{
    color: $white;
    margin: 0px;
  }

  .wrapper-card-text{
    flex-basis: 100%;
    text-align: left;
    background: $black;

    p{
      margin-top: 10px;
      margin-bottom: 10px;
    }

    @include ipad-min{
      flex-basis: 50%;
    }
  }
}
</style>
