  <template>
  <div class="card card-black">

    <div class="wrapper-card-text">
      <i :class="icon"></i> 
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
      <div class="btn-wrapper">
        <a href="#" type="button" class="btn-purple">Läs mer</a>
        <a href="#" type="button" class="btn-red">Boka tid</a>
      </div>

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
@import '@/scss/_variables.scss';
.card{
  .wrapper-card-text {
    padding: 30px 30px 10px 30px;
    text-align: center;
    @media (min-width: 768px) {
      padding: 40px 50px 10px 50px;
    }
    h3 {
      padding: 0px;
      margin: 0px;
      color: $white;
      margin-bottom: 10px;
    }
    p {
      text-transform: none;
      color: $lightGrey;
    }
    a{
      margin: 5px;
      margin-top: 20px;
      margin-bottom: 10px;
    }
  }
}
.card-black {
    background: $black;
    i{
      font-size: 3em;
      color: $white;
      margin-bottom: 20px;
    }

  .btn-wrapper{
    padding: 0px 0px 40px 0px;
    @media(min-width: 768px){
    padding: 0px 0px 50px 0px;
    }
  }
}
</style>
