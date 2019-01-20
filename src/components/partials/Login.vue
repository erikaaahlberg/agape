<template>
  <div :class="logInClass">
    <a href="#" type="button" class="trustbar-btn trustbar-btn-green" @click="showModal">
      Logga in
    </a>
    <modal v-show="isModalVisible" @close="closeModal">
      <h1 slot="title"><i class="fas fa-angle-right"></i> Logga in</h1>
      <login-form slot="body" v-on:emitInput="login"/>
    </modal>
  </div>
</template>
<script>
  //const bcrypt = require('bcryptjs');
  import Modal from '@/components/partials/Modal.vue';
  import LoginForm from '@/components/partials/LoginForm.vue';
  import Router from '@/router/index.js';

  /*
  ,
      data() {
        return {
          isModalVisible: false,
        };
      },
      methods: {
        showModal() {
          this.isModalVisible = true;
        },
        closeModal() {
          this.isModalVisible = false;
        }
      }
       
       
           
      <button
        type="button"
        class="btn"
        @click="showModal"
      >
        Open Modal!
      </button>

      <modal
        v-show="isModalVisible"
        @close="closeModal"
      />
      */
  export default {
    components: {
      'modal': Modal,
      'login-form': LoginForm
    },
    data() {
      return {
        isModalVisible: false,
        message: '',
        isAdmin: this.$session.exists()
      }
    },
    computed: {
      logInClass: function () {
        if (this.isAdmin === true ) {
          return 'hidden';
        } else {
            return 'login-link-wrapper';
        }
      }
    },
    methods: {
      showModal: function () {
        this.isModalVisible = true;
      },
      closeModal: function () {
        this.isModalVisible = false;
      },
      login: function ($event) {
        const requestBody = {
          username: $event.username,
          password: $event.password
        }
        fetch("http://localhost:3001/admin/login", {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
              body: JSON.stringify(requestBody),
              mode: 'cors',
              credentials: 'omit',
              redirect: 'follow'
            })
            .then(response => response.json())
              .then((login) => {
                console.log(login);
                if (login.success) {
                  this.$session.start();
                  this.$session.set('username', login.username);
                  this.$session.set('email', login.email);
                  this.$router.go();
                }
              })
                .catch((errors) => {
                  console.log(errors);
                });    
      }
    }
  }

</script>
<style lang="scss">
  @import '@/scss/_main.scss';

  .login-link-wrapper {
    display: inline-block;
  }

</style>
