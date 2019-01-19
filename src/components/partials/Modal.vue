<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" 
			role="dialog" 
			aria-labelledby="modalTitle" 
			aria-describedby="modalDescription">
        <div class="slots-wrapper">
          <header class="modal-header">
            <slot name="title">
              Hoppsan
            </slot>
            <button type="button" class="btn-close" @click="close" aria-label="Close modal">
              <i class="fas fa-times"></i>
            </button>
          </header>
          <section class="modal-body" id="modalDescription">
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
    name: 'modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };

</script>

<style lang="scss">
  @import '@/scss/_variables.scss';
  @import '@/scss/_mixins.scss';

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
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(31, 37, 37, 0.804);
  }

  .modal {
    background: transparent;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }
    .slots-wrapper {
      background: black;
      width: 60%;
      height: auto;
    }

  .modal-header {
    @include title;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 3rem;
    h1 {
      font-size: 2rem;
      letter-spacing: 1.5px;
      font-weight: 600;
    }
    button.btn-close {
      @include flex-center;
      width: 3vw;
      height: 3vw;
      border: none;
      border-radius: 0.5rem;
      font-size: 1.2rem;
      cursor: pointer;
      font-weight: bold;
      color: $white;
      background: $red;
      @media (max-width: 992px) {
        font-size: 1rem;
        min-width: 1.5rem;
        min-height: 1.5rem;
      }
    }
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
    @include section;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

</style>
