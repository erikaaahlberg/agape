<template>
  <div class="list-wrapper">
    <ul class="contact-list">
      <li>
        <a href="mailto:karl@thewisdomofaman.se" target="_blank">
          <i class="far fa-envelope-open"></i>     
          <span class="link-title">karl@thewisdomofaman.se</span>
        </a>
      </li>
      <li>
        <a href="tel:0760505813" target="_blank">
          <i class="fas fa-mobile-alt"></i> 
          <span class="link-title">
            0760505813
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ContactList',
    data: function () {
      return {
        contactInfo: {
          email: 'karl@thewisdomofaman.se',
          phone: '0760505813',
          facebook: [{
            name: 'Karl Green',
            link: 'https://www.facebook.com/thewisdomofaman'
          }],
          instagram: [{
            name: 'thewisdomofaman',
            link: 'https://instagram.com/thewisdomofaman?utm_source=ig_profile_share&igshid=11t4jzz7isr6e'
          }]
        }
      }
    }
  }
</script>

<style lang="scss">

</style>