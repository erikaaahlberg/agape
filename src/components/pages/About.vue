<template>
<section id="about-page">
  <h2><i class="fas fa-angle-right"></i> Om Karl</h2>
  <div class="section-padding">
    <div class="flex-wrapper">
      <div class="bg-img"></div>
      <div class="text-wrapper">
        <p>blablablbaabla blablablbaabl abla blablba ablablab lablbaabla blablablbaab lablablablbaab lablablablbaabla blab lablba ablabl ablablb aablablabl ablbaablab lablablbaa </p>
        <p>blablablbaabla blablablbaabl abla blablba ablablab lablbaabla blablablbaab lablablablbaab lablablablbaabla blab lablba ablabl ablablb aablablabl ablbaablab lablablbaa </p>
        <p>blablablbaabla blablablbaabl abla blablba ablablab lablbaabla blablablbaab lablablablbaab lablablablbaabla blab lablba ablabl ablablb aablablabl ablbaablab lablablbaa </p>
        <p>blablablbaabla blablablbaabl abla blablba ablablab lablbaabla blablablbaab lablablablbaab lablablablbaabla blab lablba ablabl ablablb aablablabl ablbaablab lablablbaa </p>
      </div>
    </div>
  </div>
</section>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/scss/_variables.scss';
#about-page{
  .flex-wrapper{
    width: 100%;
    .bg-img{
      background: url('../../assets/images/karl2.jpg');
      width: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    @media(min-width: 768px){
      display: flex;
      .bg-img{
        flex-basis: 50%;
      }
      .text-wrapper{
        background: $black;
        flex-basis: 50%;
        padding: 50px;
      }
    }
  }
}
</style>
