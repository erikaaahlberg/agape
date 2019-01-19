<template>
  <div :class="logoutClass">
    <span class="status">
      <i class="fas fa-angle-right"></i> Inloggad som {{ this.$session.get('username') }}
    </span>
    <a href="#" type="button" class="trustbar-btn trustbar-btn-red" @click="showModal">
      Logga ut
    </a>
    <modal v-show="isModalVisible" @close="closeModal">
      <h1 slot="title"><i class="fas fa-angle-right"></i> Logga ut</h1>
      <div id="logout-confirm-question" slot="body">
        <p class="question">
          Är du säker på att du vill logga ut?
        </p>
        <a href="#" type="button" class="btn-purple" @click="logout">
          Fortsätt
        </a>
        <a href="#" type="button" class="btn-red" @click="closeModal">
          Avbryt
        </a>
      </div>
    </modal>
  </div>
</template>
<script>
  import Modal from '@/components/partials/Modal.vue';
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
        if (!this.isAdmin) {
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
      logout: function ($event) {
        console.log('hejdååå');
        //this.$session.destroy();
      }
    }
  }
</script>

<style lang="scss">
  @import '@/scss/_variables.scss';

  .logout-link-wrapper {
    display: inline-block;
  }
  #logout-confirm-question {
    text-align: center;
    padding: 0px;
    p {
      margin-bottom: 2rem;
    }
    
    a {
      margin-right: 0.5rem;
      &:nth-last-child() {
      margin-right: 0rem;
    }
    }
  }

</style>
