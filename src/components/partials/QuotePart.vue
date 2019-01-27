<template>
<section class="quote-part">
  <div class="quote-wrapper">
    <p>
      <i class="fas fa-quote-right"></i>
			{{ quote }}
      <i class="fas fa-quote-right"></i><br />
      <span class="name">- {{ author }}</span>
    </p>
  </div>
	</section>
</template>

<script>
  export default {
    name: 'QuotePart',
		props: [
			'quote',
			'author'
		]
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '@/scss/_main.scss';

  .quote-part {
    @include section;
    .quote-wrapper {
        text-align: center;

      p{
        max-width: 50rem;
        margin: auto;
        font-size: 1.5rem;
        text-transform: uppercase;
      }

      span{
        text-transform: none;
      }

      i{
        margin: 1rem;
      }
    }
  }

	
</style>
