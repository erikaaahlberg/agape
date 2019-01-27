<template>
	<div class="trustbar">
		<div class="trustbar-wrapper">
			<div class="lists-wrapper">
				<contact-list/>
				<social-media-list/>
			</div>
			<div class="buttons-wrapper">
				<login-link/>
				<logout-link/>
			</div>
		</div>
	</div>
</template>

<script>
  import Login from './Login.vue';
	import Logout from './Logout.vue';
	import ContactList from './ContactList.vue';
	import SocialMediaList from './SocialMediaList.vue';
	
  export default {
		components: {
			'login-link': Login,
			'logout-link': Logout,
			'contact-list': ContactList,
			'social-media-list': SocialMediaList
		}
  };

</script>

<style lang="scss">
	@import '@/scss/_main.scss';
	
	.trustbar {
		width: 100%;
		background: black;
		padding: 0rem;
		margin: 0rem;

		.trustbar-wrapper {		
			margin: 0;
			padding: 1rem 2rem 1rem 2rem;
			@include flex-center;
			justify-content: space-between;

			@include ipad-min {
				padding: 1rem 3rem 0.7rem;
			}

			.lists-wrapper {
				flex-basis: 60%;
				padding: 0rem;
				flex-direction: row;

				@include ipad-min {
					flex-basis: 30%;
				}

				.list-wrapper {
					@include flex-center;
					display: inline-block;

					.contact-list,
					.social-media-list {
						width: 100%;
						padding: 0rem;

						li {
							display: inline-block;
							margin-right: 0.5rem;

							.link-title {
								display: none;
							}

							i {
								@include link($white, $primary);
								font-size: 1.5rem;
							}
						}
					}

					.social-media-list {
						li {
							margin-right: 0.5rem;
						}
					}
				}
			}

			.buttons-wrapper {
				flex-basis: 50%;
				text-align: right;

				.status {
					text-transform: none;
					letter-spacing: 0.1rem;
					margin-right: 0.5rem;
					color: $lightGrey;
				}

				.trustbar-btn-green {
					@include button($primaryBright, $black, $primary, $white);
					padding: 0.1rem 1rem 0rem;
					font-size: 1rem;
				}

				.trustbar-btn-secondary {
					@include button($secondary, $black, $secondaryBright, $black);
					padding: 0.1rem 1rem 0rem;
					font-size: 1rem;
				}
			}
		}
	}
</style>
