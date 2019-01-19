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
		name: 'TrustBar',
		data() {
			return {
				hej: 'hej'
			}
		},
		components: {
			'login-link': Login,
			'logout-link': Logout,
			'contact-list': ContactList,
			'social-media-list': SocialMediaList
		},
		methods: {
			hejsan: function () {
				console.log('hej');
			}
		}
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	@import '@/scss/_variables.scss';
	@import '@/scss/_mixins.scss';
	
	.trustbar {
		width: 100%;
		background: black;
		padding: 0rem;
		margin: 0rem;
		.trustbar-wrapper {		
			margin: 0;
			padding: 1rem 3rem 0.7rem;
			display: flex;
			justify-content: space-between;
			.lists-wrapper {
				flex-basis: 30%;
				padding: 0px;
				//display: flex;
				flex-direction: row;
				.list-wrapper {
					display: inline-block;
					//flex-basis: 50%;
					.contact-list,
					.social-media-list {
						width: 100%;
						padding: 0px;
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
					//font-style: italic;
					letter-spacing: 0.1rem;
					margin-right: 0.5rem;
				}
				.trustbar-btn-green {
					@include button($primary, $black, $primaryBright, $white);
					text-shadow: 1px 1px 5px $primaryDark;
					&:hover {
						text-shadow: none;
					}
				}
				.trustbar-btn-red {
					@include button($red, $black, $redBright, $white);
					text-shadow: 1px 1px 5px $redDark;
					&:hover {
						text-shadow: none;
					}
				}
				.trustbar-btn {
					padding: 0.12rem 0.5rem;
					border-radius: 0.2rem;
					letter-spacing: 0.08rem;
				}
			}
		}
	}
</style>
