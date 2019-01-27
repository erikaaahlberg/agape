<template>
  <div :class="logoutClass">
    <span class="status">
      <i class="fas fa-angle-right"></i> Inloggad som {{ this.$session.get('username') }}
    </span>
    <button type="button" class="trustbar-btn trustbar-btn-secondary" @click="showModal">
      Logga ut
    </button>
    <modal v-show="isModalVisible" @close="closeModal">
      <h1 slot="title"><i class="fas fa-angle-right"></i> Logga ut</h1>
      <div class="modal-confirm-question" slot="body">
        <p class="question">
          Är du säker på att du vill logga ut?
        </p>
        <button type="button" class="btn-primary" @click="logout">
          Fortsätt
        </button>
        <button type="button" class="btn-secondary" @click="closeModal">
          Avbryt
        </button>
      </div>
    </modal>
  </div>
</template>
<script>
  import Modal from '@/components/partials/Modal.vue';
  //import Router from '@/router/index.js';

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
      'modal': Modal
    },
    data() {
      return {
        isModalVisible: false,
        isAdmin: this.$session.exists()
      }
    },
    computed: {
      logoutClass: function () {
        if (this.isAdmin === false) {
          return 'hidden';
        } else {
          return 'logout-link-wrapper';
        }
      },
    },
    methods: {
      showModal: function () {
        this.isModalVisible = true;
      },
      closeModal: function () {
        this.isModalVisible = false;
      },
      logout: function () {
        console.log('hejdååå');
        this.$session.destroy();
        this.closeModal();
        this.$router.go();
      }
    }
  }
</script>

<style lang="scss">
  @import '@/scss/_main.scss';

  .logout-link-wrapper {
    display: inline-block;
  }

</style>
