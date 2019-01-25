<template>
  <section class="main-footer">
    <footer>
      <div class="footer-wrapper">
        <div class="footer-column">
          <h5>Kontakt</h5>
					<contact-list/>
        </div>
        <div class="footer-column flex-center">
          <div class="text-wrapper">
            <p>Alla gör något men ingen gör allt. Alla gör något men ingen gör allt. Alla gör något men ingen gör allt.
            </p>
          </div>
        </div>
        <div class="footer-column">
          <h5>Sociala medier</h5>
					<social-media-list/>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
import ContactList from '@/components/partials/ContactList.vue';
import SocialMediaList from '@/components/partials/SocialMediaList.vue';

  export default {
		name: 'MainFooter',
		components: {
			'contact-list': ContactList,
			'social-media-list': SocialMediaList
		}
  };

</script>

<style lang="scss">
  @import '@/scss/_main.scss';

  .main-footer {
    .footer-wrapper {
      color: $black;
      width: 100%;
      background: $secondary;
      display: flex;
      flex-direction: column;

      @include small-min {
        flex-direction: row;
        justify-content: space-between;
      }

      .footer-column {
        flex-basis: 100%;
        padding: 2rem;
        text-align: center;

        h5 {
          display: inline-block;
          margin-bottom: 1rem;
          border-bottom: 0.5rem solid $white;
        } 

        li {
          margin-bottom: 0.5rem;

          a {
            @include link($black, $white);
          }
        }

        p {
					text-align: center;
					max-width: 35rem;
					margin: auto;
        }
        .social-media-list {
					li {

          display: inline-block;

            i {
              font-size: 2rem;
              margin: 0.3rem;
              margin-top: 0rem;
            }
        	}
        }
        
        @include small-max {

					&:nth-child(1){
						border-bottom: 0.1rem solid $black;
					}
					&:nth-child(2){
						border-bottom: 0.1rem solid $black;
					}
				}
        @include small-min {
					padding: 3rem;
          flex-basis: 30%;
          text-align: left;

          &:nth-child(3) {
            text-align: right;
          }
        }
      }
    }
  }

</style>
