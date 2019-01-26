<template>
  <div class="card-icon">
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
    max-width: 35rem;
		margin: auto;
		padding: 3rem;
    border-bottom: 0.1rem solid $lightGrey;

    i.top {
      font-size: 3rem;
			color: $white;
			margin-bottom: 1rem;
    }

    .container-text {
			//padding: 3rem;
			//@include container-padding;
    	margin: auto;
      text-align: center;

			/*@include ipad-min {

			}
      @include medium-min {
        padding: 2rem 3rem;
      }*/

      a {
        margin: 0rem;

        h3 {
					@include link($primaryBright, $primary);
          padding: 0rem;
          margin: 0rem;
        }
      }

      p {
        text-transform: none;
				color: $lightGrey;
				margin-bottom: 1.5rem;
				margin-top: 1rem;
      }
    }
  }
</style>