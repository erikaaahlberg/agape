<template>
<section id="about-page">
  <h2><i class="fas fa-angle-right"></i> Om Agape</h2>
  <about-container
  :imgUrl="imgBackgroundUrl">
    <h3 slot="title">Agape betyder <span>kärlek</span></h3>
    <div slot="body">
      <p>här e kalle här e kalle här e kalle här e faktiskt kalle. här e kalle här e kalle här e kalle här e faktiskt kalle. här e kalle här e kalle här e kalle här e faktiskt kalle. här e kalle här e kalle här e kalle här e faktiskt kalle. här e kalle här e kalle här e kalle här e faktiskt kalle.</p>
    </div>
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
</style>
