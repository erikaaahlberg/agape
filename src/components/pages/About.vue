<template>
<section id="about-page">
  <h2><i class="fas fa-angle-right"></i> Om Agape</h2>
  <about-container
  :imgUrl="imgBackgroundUrl">
    <p slot="body">här e kalle här e kalle här e kalle här e faktiskt kalle. här e kalle här e kalle här e kalle här e faktiskt kalle. här e kalle här e kalle här e kalle här e faktiskt kalle. här e kalle här e kalle här e kalle här e faktiskt kalle. här e kalle här e kalle här e kalle här e faktiskt kalle.</p>
  </about-container>
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

<style lang="scss">
@import '@/scss/_main.scss';

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
    @include ipad {
      display: flex;
      .bg-img{
        flex-basis: 50%;
      }
      .text-wrapper{
        background: $black;
        flex-basis: 50%;
        padding: 5rem;
      }
    }
  }
}
</style>
