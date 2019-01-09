<template>
  <div class="list-wrapper">
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
  </div>
</template>
<script>
  export default {
    name: 'SocialMediaList'
  }

</script>
<style lang="scss">
        .social-media {
          i {
						font-size: 2em;
						margin: 3px;
						margin-top: 0px;
					}
					li {
          display: inline-block;
        	}
				}
</style>
