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
  @import '@/scss/_variables.scss';

  .main-footer {
    .footer-wrapper {
      color: $black;
      width: 100%;
      background: $red;
      display: flex;
      flex-direction: column;
      @media (min-width: 992px) {
        flex-direction: row;
        justify-content: space-between;
      }

      .footer-column {
        flex-basis: 100%;
        padding: 20px;
        text-align: center;
        h5 {
          display: inline-block;
          margin-bottom: 15px;
          border-bottom: 5px solid $white;
        }        
        li {
          margin-bottom: 5px;
          a {
            color: $black;
            letter-spacing: 1.2px;
            font-size: 1em;
            &:hover {
              color: $white;
            }
          }
        }
        p {
					text-align: center;
					max-width: 350px;
					margin: auto;
        }
        .social-media-list {
					li {
          display: inline-block;
            i {
              font-size: 2em;
              margin: 3px;
              margin-top: 0px;
            }
        	}
				}
        @media (max-width: 992px){
					&:nth-child(1){
						border-bottom: 1px solid $black;
					}
					&:nth-child(2){
						border-bottom: 1px solid $black;
					}
				}
        @media(min-width: 992px) {
					padding: 30px;
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
