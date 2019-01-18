<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <img :src="logoUrl" id="logotype-img-top">
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="isOpen = !isOpen"
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
        <p class="flex-center link-wrapper"><router-link to="/admin" class="navbar-item is-tab">Admin</router-link></p>
        <p class="flex-center link-wrapper"><login-btn/></p>
      </div>
    </div>
  </nav>
</template>

<script>
  import Login from './Login.vue';
  export default {
    name: 'PageNav',
    data() {
      return {
        isOpen: false,
        logoUrl: require('@/assets/images/logo.png')
      }
    },
    components: {
      'login-btn': Login
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../scss/_variables.scss';

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
      padding-top: 40px;
    }
		.navbar-item{
			&.is-active{
				border-bottom: 3px solid $red;
			}
		}
		.link-wrapper{
			margin-bottom: 15px;
		}
  }

  #logotype-img-top {
    max-height: 80px;
  }

  /* Expanded navbar */
  .navbar {
    background: rgb(29, 29, 29);
    color: $white;
    padding: 20px 50px;
		p{
			margin-left: 10px;
			margin-right: 10px;
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
			padding: 0px;
			color: $white;
			letter-spacing: 1.5px;
			margin: auto;
			min-height: 0px;
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
			border-bottom: 3px solid $red;
			padding-bottom: 2px;
			padding-top: 7px;
			
		}
		&.router-link-exact-active:hover{
			color: $white;
			border-bottom: 3px solid $red;
			padding-bottom: 2px;
			padding-top: 7px;
			
		}
  }

</style>
