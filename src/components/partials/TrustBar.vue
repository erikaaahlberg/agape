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
		//border-bottom: 0.02rem solid $black;
		width: 100%;
		background: $secondary;
		padding: 0rem;
		margin: 0rem;  
		position: sticky;
		top: 0;
		z-index:100;
		box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.44);

		.trustbar-wrapper {		
			margin: 0;
			padding: 1rem 2rem 1rem 2rem;

			@include flex-center;
			justify-content: space-between;

			@include ipad-min {
				padding: 1rem 3rem 1rem;
			}

			.lists-wrapper {
				flex-basis: 40%;
				padding: 0rem;
				flex-direction: row;

				@include mobile-portrait-max {
					flex-basis: 65%;
				}

				@include mobile-landscape-max {
					flex-basis: 50%;
				}

				/*@include ipad-min {
					flex-basis: 30%;
				}*/

				.list-wrapper {
					display: inline-block;

					.contact-list,
					.social-media-list {
						@include flex-center;
						width: 100%;
						padding: 0rem;

						li {
							display: inline-block;
							margin-right: 0.5rem;

							.link-title {
								display: none;
							}

							i {
								@include link($black, $white);
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
				flex-basis: 70%;
				text-align: right;

				@include mobile-portrait-max {
					flex-basis: 45%;
				}

				.logout-link-wrapper,
				.login-link-wrapper {
					width: 100%;	
					text-align: right;
				}

				.status {
					text-transform: none;
					letter-spacing: 0.1rem;
					margin-right: 0.5rem;
					color: $lightGrey;

					@include mobile-portrait-max {
						display: none;
					}
				}

				.trustbar-btn-primary {
					@include button($white, $black, $black, $white);
					padding: 0.1rem 1rem 0rem;
					font-size: 1rem;
				}

				.trustbar-btn-secondary {
					@include button($black, $white, $white, $black);
					padding: 0.1rem 1rem 0rem;
					font-size: 1rem;
				}
			}
		}
	}
</style>
