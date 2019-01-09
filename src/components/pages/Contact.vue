<template>
<section id="contact-page">
  <h2><i class="fas fa-angle-right"></i> Kontakt</h2>
    <contact-container
    :imgUrl="imgBackgroundUrl"
    :text="text"/>
</section>
</template>

<script>
import FlexContainer from '@/components/partials/FlexContainer.vue';
import ContactList from '@/components/partials/ContactList.vue';
import SocialMediaList from '@/components/partials/SocialMediaList.vue';

export default {
    name: 'Contact',
    data() {
      return {
        imgBackgroundUrl: require('@/assets/images/karl3.jpg'),
        text: '<ul class="contact"><li><a href="mailto:karl@thewisdomofaman.se"><i class="far fa-envelope-open"></i> karl@thewisdomofaman.se</a></li><li><a href="tel:0760505813"><i class="fas fa-mobile-alt"></i> 0760505813</a></li></ul>    <ul class="social-media"><li><a href="https://www.facebook.com/thewisdomofaman"><i class="fab fa-facebook-square"></i></a></li><li><a href="tel:0760505813"><i class="fab fa-instagram"></i></a></li><li><a href="https://www.linkedin.com/in/karljgreen/"><i class="fab fa-linkedin"></i></a></li></ul>'
      }
    },
    components: {
      'contact-container': FlexContainer,
			'contact-list': ContactList,
			'social-media-list': SocialMediaList
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/scss/_variables.scss';

#contact-page{
  li{
    a{
    color: white;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 1.2em;
    display: inline-block;
    &:hover{
      color: $primary;
      transition: color .2s ease-in-out;
    }
    &:nth-child(2){

      border-bottom: 5px solid $primary;
    }
  }
  } 
    .contact{
      border-bottom: 5px solid $primary;
      padding-bottom: 5px;
      margin-bottom: 15px;
    }
    .social-media{
    i{
      margin-right: 10px;
    }
    }
}
</style>
