<template>
  <div class="card card-icon">
    <div class="container-text">
      <i :class="icon"></i>
      <router-link to="/services">
        <h3>{{ title }}</h3>
      </router-link>
      <p>
        {{ description }}
      </p>
      <a href="#" class="link-primary">Läs mer <i class="fas fa-angle-right c-red"></i></a>
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

  .card-icon {
    background: $black;

    i.top {
      font-size: 3rem;
			color: $white;
			margin-bottom: 1rem;
    }

    .container-text {
			//padding: 3rem 3rem 1.5rem 3rem;
			@include container-padding;
			max-width: 30rem;
    	margin: auto;
      text-align: center;

      /*@include medium-min {
        padding: 2rem 3rem;
      }*/

      a {
        margin: 0rem;

        @include small-max {
					display: block;
					margin: 0rem;
        }

        h3 {
					@include link($primaryBright, $primary);
          padding: 0rem;
          margin: 0rem;
          //margin-bottom: 1rem;
          //color: $primaryBright;

          /*&:hover {
            color: $primary;
            transition: color .2s ease-in-out;
          }*/
        }
      }

      p {
        text-transform: none;
				color: $lightGrey;
				margin-bottom: 1.5rem;
				margin-top: 1rem;
      }
    }

    /*.btn-wrapper {
      text-align: center;
      padding: 1rem 3rem 5rem 3rem;

      a {
        display: inline-block;
        margin: 0.5rem;
      }
    }*/
  }
</style>