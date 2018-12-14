<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <img src="../../assets/images/logotype2.png" id="logotype-img-top">
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="isOpen = !isOpen"
        v-bind:class="{'is-active': isOpen}">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" v-bind:class="{'is-active': isOpen}">
      <div class="navbar-end">
        <router-link to="/" class="navbar-item is-tab">Start</router-link>
        <router-link to="/about" class="navbar-item is-tab">Om Karl</router-link>
        <router-link to="/services" class="navbar-item is-tab">Tjänster</router-link>
        <router-link to="/contact" class="navbar-item is-tab">Kontakt</router-link>
        <router-link to="/book" class="navbar-item is-tab">Boka</router-link>
        <router-link to="/art" class="navbar-item is-tab">Konst</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: 'mainNav',
        data: function () {
            return {
                isOpen: false
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /* Mobile menu*/
    .navbar-menu{
        background: rgba(29, 29, 29, 0.577);
        color: white;
        text-align: center;
    }
    .navbar-burger{
        color: white;
    }
    .navbar-burger:hover{
        color: rgb(193, 163, 87);
    }
    @media screen and (max-width: 1087px){
        .navbar-menu.is-active{
            position: absolute;
            width: 100%;
            left: 0;
            padding-top: 40px;
        }
    }
    #logotype-img-top{
        max-height: 80px;
    }

    /* Expanded navbar */
    .navbar{
        background: rgb(29, 29, 29);
        color: white;
        padding: 20px 50px;
    }
    .navbar-brand{
        align-items: center;
    }
    .navbar-end{
        text-align: center;
    }
    .navbar-item {
        color: white;
        letter-spacing: 1.5px;
        margin: auto;
        max-width: 110px;
    }
    .navbar-item:hover{
        color: rgb(193, 163, 87);
        transition: all .2s ease-in-out;
        border-bottom: 1px solid rgb(193, 163, 87);
        text-align: center;
    }
</style>
