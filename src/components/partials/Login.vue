<template>
  <div class="login-link-wrapper">
    <a href="#" type="button" class="link-green" @click="showModal">
      Logga in
    </a>
    <modal v-show="isModalVisible" @close="closeModal">
      <h1 slot="title"><i class="fas fa-angle-right"></i> Logga in</h1>
      <login-form slot="body" v-on:emitInput="login" message=""/>
    </modal>
  </div>
</template>
<script>
  const bcrypt = require('bcryptjs');
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
        message: ''
      }
    },
    methods: {
      hashThis: function () {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync("HejaLiv1", salt);
        console.log(hash);
      },
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
        //console.log(requestBody);
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
                this.message = login.message;
                if (login.success) {
                  this.$session.start();
                }
              })
                .catch((errors) => {
                  console.log(errors);
                });
              /*.then((response) => {
                console.log(response);
                //router.push("/dashboard")
              })
              */
        /*this.$session.start();
        console.log(this.$session.exists()); */       
      }
    }
  }

</script>
<style lang="scss">
  @import '@/scss/_variables.scss';

  .login-link-wrapper {
    a {
      text-transform: uppercase;
    }
  }

</style>
