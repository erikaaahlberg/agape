<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" 
			role="dialog" 
			aria-labelledby="modalHeader" 
			aria-describedby="modalDescription">
        <div class="slots-wrapper">
          <header class="modal-header" id="modalHeader">
            <slot name="title">
              Hoppsan
            </slot>
            <button type="button" class="btn-close" @click="close" aria-label="Close modal">
              <i class="fas fa-times"></i>
            </button>
          </header>
          <section class="modal-body">
            <slot name="body">
              Något blev fel
            </slot>
          </section>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',

    methods: {
      close() {
        this.$emit('close');
      },
    },
  };

</script>

<style lang="scss">
  @import '@/scss/_main.scss';

  /* Transitions */
  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }

  .modal-backdrop {
    @include flex-center;
    z-index: 35;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(31, 37, 37, 0.804);
  }

  .modal {
    background: transparent;
    display: flex;
    flex-direction: column;
  }
    .slots-wrapper {
      background: black;
      z-index: 40;
      width: 60%;
      height: auto;
      overflow-x: auto;
    }

  .modal-header {
    @include title;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 3rem;

    h1 {
      font-size: 2rem;
      letter-spacing: 0.15rem;
      font-weight: 600;
    }

    .btn-close {
      @include flex-center;
      justify-content: center;
      width: 3vw;
      height: 3vw;
      border: none;
      border-radius: 0.5rem;
      font-size: 1.2rem;
      cursor: pointer;
      font-weight: bold;
      color: $white;
      background: $secondary;

      @include small-max {
        font-size: 1rem;
        min-width: 1.5rem;
        min-height: 1.5rem;
      }
    }
  }

  .modal-body {
    //position: relative;
    //padding: 20px 10px;
    @include container-padding;
  }

    .modal-confirm-question,
    .modal-error-message {
    text-align: center;
    padding: 0px;

    p {
      margin-bottom: 1.5rem;
      font-size: 1.3rem;
    }
    button {
      margin: 0.2rem;
    }
  }

</style>
