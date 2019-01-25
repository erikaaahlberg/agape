<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <img :src="logoUrl" id="logotype-img-top">
      <a role="button" 
      class="navbar-burger" 
      aria-label="menu" 
      aria-expanded="false" 
      @click="isOpen = !isOpen"
      v-bind:class="{'is-active': isOpen}">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" v-bind:class="{'is-active': isOpen}">
      <div class="navbar-end">
        <p class="flex-center link-wrapper"><router-link to="/" class="navbar-item is-tab">Start</router-link></p>
        <p class="flex-center link-wrapper"><router-link to="/about" class="navbar-item is-tab">Om Agape</router-link></p>
        <p class="flex-center link-wrapper"><router-link to="/services" class="navbar-item is-tab">Tjänster</router-link></p>
        <p class="flex-center link-wrapper"><router-link to="/contact" class="navbar-item is-tab">Kontakt</router-link></p>
        <p class="flex-center link-wrapper"><router-link to="/book" class="navbar-item is-tab">Boka</router-link></p>
        <p :class="adminLinkClasses"><router-link to="/admin" class="navbar-item is-tab">Admin</router-link></p>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'PageNav',
    data() {
      return {
        isOpen: false,
        logoUrl: require('@/assets/images/logo.png'),
        isAdmin: this.$session.exists()
      }
    },
    computed: {
      adminLinkClasses: function () {
        if (this.isAdmin) {
          return 'flex-center link-wrapper';
        } else {
          return 'hidden';
        }
      }
    }
  };

</script>

<style lang="scss">
@import '@/scss/_main.scss';


  .hero.is-fullheight-with-navbar {
    min-height: calc(80vh - 2.25rem);
  }

  /* Mobile menu*/
  .navbar-menu {
    background: rgba(29, 29, 29, 0.749);
    color: $white;
    text-align: center;
  }

  .navbar-burger {
    color: $white;
		&:hover{
			color: $primary;
		}
  }

  @media screen and (max-width: 1087px) {
    .navbar-menu.is-active {
      position: absolute;
      width: 100%;
      left: 0;
      padding-top: 4rem;
    }

		.navbar-item{
			&.is-active{
				border-bottom: 0.3rem solid $secondary;
			}
    }
    
		.link-wrapper{
			margin-bottom: 1.5rem;
		}
  }

  #logotype-img-top {
    width: 10vw;

    @include ipad-min {
      max-height: 8rem;
    }
  }

  /* Expanded navbar */
  .navbar {
    background: rgb(29, 29, 29);
    color: $white;
    padding: 2rem;

		p{
			margin-left: 1rem;
			margin-right: 1rem;
    }
    
    @include ipad-min {
      padding: 2rem 5rem;
    }
  }

  .navbar-brand {
    align-items: center;
  }

  .navbar-end {
    text-align: center;
  }

  .navbar-item {
    text-transform: uppercase;
    
		&.is-tab{
			padding: 0rem;
			color: $white;
			letter-spacing: 0.15rem;
			margin: auto;
			min-height: 0rem;
			display: inline-block;
      border-bottom: none;
      
      &:hover{
        color: $primary;
        transition: all .2s ease-in-out;
        text-align: center;
        border-bottom: none;
      }
    }
    
		&.router-link-exact-active{
			border-bottom: 0.3rem solid $secondary;
			padding-bottom: 0.2rem;
			padding-top: 0.7rem;
			
		}
		&.router-link-exact-active:hover{
			color: $white;
			border-bottom: 0.3rem solid $secondary;
			padding-bottom: 0.2rem;
			padding-top: 0.7rem;
		}
  }

</style>
