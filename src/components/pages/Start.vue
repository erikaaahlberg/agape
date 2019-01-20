<template>
  <section id="home">
    <h2><i class="fas fa-angle-right"></i> Tjänster</h2> 
    <quote-part
    quote="Ålder är bara en siffra - alla förtjänar att må bra och nå sina mål i livet."
    author="Karl Green"/>
    <services-part/>
    <quote-part 
    quote="You learn more about yourself through your child, I guess."
    author="Heath Ledger"/>
    <h2><i class="fas fa-angle-right"></i> Aktuellt</h2> 
    <news-part/>
  </section>
</template>

<script>
  import ServicesPart from '@/components/partials/ServicesPart.vue';
  import NewsPart from '@/components/partials/NewsPart.vue';
  import QuotePart from '@/components/partials/QuotePart.vue';
  
  export default {
    name: 'Start',
		components: {
      'services-part': ServicesPart,
      'news-part': NewsPart,
      'quote-part': QuotePart
    }
  };
</script>

<style lang="scss">
@import '@/scss/_main.scss';
#home{
  h2{
    width: 100%;
  /*  background: $black;
    border-bottom: 1px solid $lightGrey;
    padding: 5px;
    padding-top: 10px;
    padding-left: 30px;*/
  }
}
</style>
