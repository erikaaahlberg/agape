<template>
  <section id="main-footer">
    <footer>
      <div class="footer-wrapper">
        <div class="column">
          <h5>Kontakt</h5>
					<contact-list/>
          <!--
						<ul class="contact">
            <li>
              <a href="mailto:karl@thewisdomofaman.se"><i class="far fa-envelope-open"></i> karl@thewisdomofaman.se</a>
            </li>
            <li>
              <a href="tel:0760505813">
                <i class="fas fa-mobile-alt"></i> 0760505813
              </a>
            </li>
          </ul>
					-->
        </div>
        <div class="column flex-center">
          <div class="text-wrapper">
            <p>Alla gör något men ingen gör allt. Alla gör något men ingen gör allt. Alla gör något men ingen gör allt.
            </p>
          </div>
        </div>
        <div class="column">
          <h5>Sociala medier</h5>
					<social-media-list/>
          <!--
					<ul class="social-media">
            <li>
              <a href="https://www.facebook.com/thewisdomofaman"><i class="fab fa-facebook-square"></i></a>
            </li>
            <li>
              <a href="tel:0760505813">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/karljgreen/">
                <i class="fab fa-linkedin"></i></a>
            </li>
          </ul>
					-->
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

  #main-footer {
    .footer-wrapper {
      color: $black;
      width: 100%;
      background: $red;
      display: flex;
      flex-direction: column;

      @media (min-width: 992px) {
        flex-direction: row;
      }

      .column {
        flex-basis: 100%;
        padding: 20px;
        text-align: center;

        li {
          margin-bottom: 5px;

          a {
            color: $black;
            letter-spacing: 1.2px;
            font-size: 1em;

            &:hover {
              color: $primaryBright;
            }
          }
        }

        h5 {
          display: inline-block;
          margin-bottom: 15px;
          border-bottom: 5px solid $primaryBright;
        }

        /*.social-media {
          i {
						font-size: 2em;
						margin: 3px;
						margin-top: 0px;
					}
					li {
          display: inline-block;
        	}
				}*/
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

        p {
					text-align: center;
					max-width: 350px;
					margin: auto;
        }

        /*.social-media li {
          display: inline-block;
        }*/
      }
    }
  }

</style>
