  <template>
  <div class="card card-black">

    <div class="wrapper-card-text">
      <i :class="icon"></i> 
      <router-link to="/services"><h3>{{ title }}</h3></router-link>
      <p>
        {{ description }}
        <a href="#" class="link-green">Läs mer <i class="fas fa-angle-right"></i></a>
      </p>   
    </div>
    <!--
      <div class="btn-wrapper">
        <a href="#" type="button" class="btn-purple">Läs mer</a>
        <a href="#" type="button" class="btn-red">Boka tid</a>
      </div>
      -->
  </div>
  </template>

<script>
export default {
  name: 'CardIcon',
  props: [ 
    'title',
    'description',
    'icon'
  ]
};

</script>

<style lang="scss">
@import '@/scss/_main.scss';

.card-black{
    background: $black;
    i{
      font-size: 3em;
      color: $white;
      margin-bottom: 20px;
    }
  .wrapper-card-text {
    //padding: 30px 30px 10px 30px;
    padding: 30px;
    text-align: center;
    /*@media (min-width: 768px) {
      //padding: 40px 50px 10px 50px;
      //padding: 40px 50px;
    }*/
    @media (min-width: 1200px){
      padding: 20px 30px;
    }
    a{
      margin: 0px;
      @media (max-width: 1200px){
        display: block;
      }
      h3 {
        padding: 0px;
        margin: 0px;
        margin-bottom: 10px;
        color: $primaryBright;
        &:hover{
          color: $primary;
          transition: color .2s ease-in-out;
        }
      }
    }

    /*.btn-wrapper{
      margin-top: 10px;
      a{
        margin: 10px;
      }
    }*/
    p {
      text-transform: none;
      color: $lightGrey;
    }
  }
      .btn-wrapper{
      text-align: center;
      padding: 10px 30px 50px 30px;
      //padding: 30px 50px;
      a{
        display: inline-block;
        margin: 5px;
      }
    }
}

</style>
