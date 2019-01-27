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
      class="btn btn-primary"
      @click="emitInput">
        Logga in
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userInput: {
          username: '',
          password: ''
        }
      }
    },
    props: [
      'message'
    ],
    methods: {
      emitInput: function () {
        this.$emit('emitInput', this.userInput);
      }
    }
  }

</script>
<style lang="scss">
  @import '@/scss/_main.scss';
/*
  .login-form {
    @include form-placeholder($mediumGrey);

    input {
      @include form-input;
    }

    .label {
      @include form-label;
      margin-bottom: 0rem;

      &:not(:last-child) {
        margin-bottom: 0rem;
      }
    }

    .field {
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
    }
    button {
      display: block;
      margin: auto;
    }
  }*/

</style>