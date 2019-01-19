<template>
  <div class="login-link-wrapper">
    <a href="#" type="button" class="link-green" @click="showModal">
      Logga in
    </a>
    <modal v-show="isModalVisible" @close="closeModal">
      <h1 slot="title"><i class="fas fa-angle-right"></i> Logga in</h1>
      <login-form slot="body" />
    </modal>
  </div>
</template>
<script>
  let bcrypt = require('bcryptjs');
  import Modal from '@/components/partials/Modal.vue';
  import LoginForm from '@/components/partials/LoginForm.vue';
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
        isModalVisible: false
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
        const user = {
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
              .then((response) => {
                console.log("Logged in")
                router.push("/dashboard")
              })
                .catch((errors) => {
                  console.log("Cannot log in")
                })
                
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
