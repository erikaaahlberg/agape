<template>
  <section id="contact-page">
    <h2><i class="fas fa-angle-right"></i> Kontakt</h2>
    <contact-container :imgUrl="imgBackgroundUrl">
      <div class="contact-page-list-wrapper" slot="body">
				<contact-list/>
				<social-media-list/>
      </div>
    </contact-container>
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
        imgBackgroundUrl: require('@/assets/images/karl3.jpg')
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
  @import '@/scss/_main.scss';

  .contact-page-list-wrapper {    
		.contact-list,
		.social-media-list {
			li {
				a {
					@include link($white, $primary);
				}
			}
		}
		.contact-list {
      border-bottom: 0.5rem solid $primary;
			padding-bottom: 1.5rem;
			margin: 0rem;
    }
    .social-media-list {
      padding-top: 2rem;
      li {
        display: inline-block;
        margin-right: 0.5rem;
        a {
          i {
            font-size: 2rem;
            margin-top: 0rem;
          }
        }
      }
    }
  }
</style>