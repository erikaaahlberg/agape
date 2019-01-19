<template>
  <div class="login-form-wrapper">
    <form class="login-form">
      <label class="label title-label">
        Användarnamn
      </label>
      <b-field>
        <b-input 
        placeholder="Användarnamn" 
        type="text" 
        v-model="userInput.username"
        use-html5-validation>
        </b-input>
      </b-field>
      <label class="label title-label">
        Lösenord
      </label>
      <b-field>
        <b-input 
        placeholder="Lösenord" 
        type="password" 
        v-model="userInput.password"
        use-html5-validation>
        </b-input>
      </b-field>
      <button 
      type="button" 
      class="btn btn-purple"
      @click="emitInput">
        Logga in
      </button>
    </form>
  </div>
</template>

<script>
  //let bcrypt = require('bcryptjs');
  //let salt = bcrypt.genSaltSync(10);

  export default {
    data() {
      return {
        userInput: {
          'username': '',
          'password': ''
        }
      }
    },
    props: [
      'message'
    ],
    methods: {
      /*hashPassword: function ($event) {
        const hash = bcrypt.hashSync("HejaLiv1", salt);
        console.log(hash);
      }*/
      emitInput: function () {
        this.$emit('emitInput', this.userInput);
      }
    }
  }

</script>
<style lang="scss">
  @import '@/scss/_variables.scss';
  @import '@/scss/_mixins.scss';

  .login-form {
    @include form-input;
    @include form-placeholder;
    @include form-label;
    .label {
      margin-bottom: 0px;
      &:not(:last-child) {
        margin-bottom: 0px;
      }
    }
    .field {
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
    }
  }
</style>