<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalHeader" aria-describedby="modalDescription">
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
		width: 80%;
		max-width: 50rem;
    height: auto;
		overflow-x: auto;
    border-bottom: 0.1rem solid $lightGrey;
		
		@include ipad-min {
			width: 60%;
		}
  }

  .modal-header {
    @include title;
    display: flex;
    justify-content: space-between;
    align-items: center;
    //padding-right: 3rem;

    h1 {
      font-size: 1.7rem;
      letter-spacing: 0.15rem;
      font-weight: 600;
    }

    .btn-close {
      @include flex-center;
      justify-content: center;
      width: 2.5vw;
			height: 2.5vw;
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
    @include container-padding;
    @include form-placeholder($mediumGrey);
    @include form-select;
    text-align: center;

    p {
      font-size: 1.3rem;
    }

    .btn-wrapper {
			text-align: center;
			margin-top: 0.5rem;

			@include ipad-min {
				margin-top: 1rem;
			}

			@include small-min {
				margin-top: 1.5rem;
			}

			button {
				margin-right: 0.4rem;
			}
		}
		
    button {
      margin: 0.2rem;
    }

    input {
      @include form-input;
    }

    li {
			@include flex-center;
			flex-wrap: wrap;

      &:not(:last-child) {
        margin-bottom: 1.2rem;
			}

			p {
				/*text-transform: none;
				letter-spacing: 0.15rem;
				font-size: 1.1rem;*/
				color: $lightGrey;
			}
    }

      label {
        @include form-label;
        margin-right: 0.5rem;
      }

      .field {
        width: 100%;
        display: inline-block; 

        &:not(:last-child) {
          margin-bottom: 2.5rem;
        }
      }
    


  /*.login-form {
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

	}

/*
  .modal-confirm-question,
  .modal-error-message {
    text-align: center;
    padding: 0rem;

    p {
      margin-bottom: 1.5rem;
      font-size: 1.3rem;
    }
    button {
      margin: 0.2rem;
    }
  }
*/
</style>
