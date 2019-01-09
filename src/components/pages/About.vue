<template>
<section id="about-page">
  <h2><i class="fas fa-angle-right"></i> Om Agape</h2>
  <about-container 
  :imgUrl="imgBackgroundUrl"
  :text="text"
  />
  <!--<div class="section-padding">
    <div class="flex-wrapper">
      <div class="bg-img"></div>
      <div class="text-wrapper">
        <p>blablablbaabla blablablbaabl abla blablba ablablab lablbaabla blablablbaab lablablablbaab lablablablbaabla blab lablba ablabl ablablb aablablabl ablbaablab lablablbaa </p>
        <p>blablablbaabla blablablbaabl abla blablba ablablab lablbaabla blablablbaab lablablablbaab lablablablbaabla blab lablba ablabl ablablb aablablabl ablbaablab lablablbaa </p>
        <p>blablablbaabla blablablbaabl abla blablba ablablab lablbaabla blablablbaab lablablablbaab lablablablbaabla blab lablba ablabl ablablb aablablabl ablbaablab lablablbaa </p>
        <p>blablablbaabla blablablbaabl abla blablba ablablab lablbaabla blablablbaab lablablablbaab lablablablbaabla blab lablba ablabl ablablb aablablabl ablbaablab lablablbaa </p>
      </div>
    </div>
  </div>-->
</section>
</template>

<script>
import FlexContainer from '@/components/partials/FlexContainer.vue';

export default {
    name: 'About',
    data() {
      return {
        imgBackgroundUrl: require('@/assets/images/karl2.jpg'),
        text: 'här e kalle här e kalle här e kalle här e faktiskt kalle. här e kalle här e kalle här e kalle här e faktiskt kalle. här e kalle här e kalle här e kalle här e faktiskt kalle. här e kalle här e kalle här e kalle här e faktiskt kalle. här e kalle här e kalle här e kalle här e faktiskt kalle.'
      }
    },
    components: {
      'about-container': FlexContainer
    }
};
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
