<template>
<section id="quote-part" class="section-margin">
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
  /*<h5 class="sub-title">{{ date }} {{ time }} {{ place }}</h5>*/
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

  .quote-wrapper{
    padding: 30px;
    text-align: center;
    p{
      max-width: 600px;
      margin: auto;
      font-size: 1.5em;
      text-transform: uppercase;
    }
    span{
      text-transform: none;
    }
    i{
      margin: 10px;
    }
	}
	
</style>
