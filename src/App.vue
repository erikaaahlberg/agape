<template>
  <div id="app">
    <main-nav/>
    <hero/>
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
  </div>
</template>

<script>
import mainNav from '@/components/MainNav'
import hero from '@/components/HeroImage'

export default {
  name: 'App',
  components: {
    'main-nav': mainNav,
    'hero': hero
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Hind:400,600,700');

/* Global */
.flex-center{
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-wrapper{
  margin: 30px;
}
*{
  box-sizing: border-box;
}
body{
  height: 100%;
  background: rgb(29, 29, 29);
}
#app {
  background: rgb(29, 29, 29);
  font-family: 'Hind', sans-serif;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
