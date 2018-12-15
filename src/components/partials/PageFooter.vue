<template>
<section id="page-footer">
	<footer>
		<div class="footer-wrapper">
			<div class="column">
				<h5>Kontakt</h5>
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
			</div>
			<div class="column flex-center">
				<div class="text-wrapper">
					<p>Alla gör något men ingen gör allt. Alla gör något men ingen gör allt. Alla gör något men ingen gör allt. </p>
				</div>
			</div>
			<div class="column">
				<h5>Sociala medier</h5>
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
						<a href="https://thewaronfear.tumblr.com">
							<i class="fab fa-tumblr-square"></i></a>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</section>
</template>

<script>
export default {
  name: 'PageFooter'
};

</script>

<style lang="scss">
@import '@/scss/_variables.scss';

#page-footer {
	.footer-wrapper{
		color: $black;
		padding: 20px;
		width: 100%;
		background: $red;
		display: flex;
		flex-direction: column;
		@media (min-width: 992px){
			flex-direction: row;
		}
		.column{
			flex-basis: 100%;
			padding: 0px 15px;
			text-align: center;
			li{
				margin-bottom: 5px;
				a{
					color: $black;
					letter-spacing: 1.5px;
					font-size: 1.1em;
					&:hover{
						color: $white;
					}
				}
			}
			h5{
				display: inline-block;
				margin-bottom: 15px;
				border-bottom: 5px solid white;
			}
			.social-media{
				i{
					font-size: 2em;
				}
			}
			@media(min-width: 992px){
				/*&:nth-child(1){
					flex-basis: 38%;
				}*/
				flex-basis: 30%;
				text-align: left;
				&:nth-child(3){
					text-align: right;
				}
			}
			p{
				text-align: center;
			}
			.social-media li{
				display: inline-block;
			}
		}
	}
}
</style>
