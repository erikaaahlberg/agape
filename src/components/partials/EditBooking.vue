<template>
  <section class="single-booking-edit">
    <div class="booking-body">
      <!--ny komponent-->
      <div class="booking-content">
        <h4>{{ bookingContent.time }}</h4>
        <ul class="booking-list">
          <li>
            <label for="firstName">Namn:</label>
            <b-field>
              <b-input :placeholder="bookingContent.firstName" :value="booking.firstName" @input="booking.firstName = $event"
                type="text" use-html5-validation :disabled="isDisabled" :class="inputClasses">
              </b-input>
            </b-field>
          </li>
          <li>
            <label for="lastName">Efternamn:</label>
            <b-field>
              <b-input :placeholder="bookingContent.lastName" :value="booking.lastName" @input="booking.lastName = $event"
                type="text" use-html5-validation :disabled="isDisabled" :class="inputClasses">
              </b-input>
            </b-field>
          </li>
          <li>
            <label for="email">Email:</label>
            <b-field>
              <b-input :placeholder="bookingContent.email" :value="booking.email" @input="booking.email = $event" type="email"
                use-html5-validation :disabled="isDisabled" :class="inputClasses">
              </b-input>
            </b-field>
          </li>
          <li>
            <label for="phone">Telefonnummer:</label>
            <b-field>
              <b-input :placeholder="bookingContent.phone" :value="booking.phone" @input="booking.phone = $event" type="tel"
                use-html5-validation :disabled="isDisabled" :class="inputClasses">
              </b-input>
            </b-field>
          </li>
          <li>
            <label for="category">Kategori:</label>
            <b-field>
              <b-input :placeholder="bookingContent.category" :value="booking.category" @input="booking.category = $event"
                type="text" use-html5-validation :disabled="isDisabled" :class="inputClasses">
              </b-input>
            </b-field>
          </li>
          <li>
            <label for="description">Beskrivning:</label>
							<p>{{bookingContent.description}}</p>
          </li>
          <li>
            <label for="phone">Datum:</label>
            <b-field>
              <b-input :placeholder="bookingContent.date" :value="booking.date" @input="booking.date = $event" type="text"
                use-html5-validation :disabled="isDisabled" :class="inputClasses">
              </b-input>
            </b-field>
          </li>
          <li>
            <label for="phone">Tid:</label>
            <b-field>
              <b-input :placeholder="bookingContent.time" :value="booking.time" @input="booking.time = $event" type="text"
                use-html5-validation :disabled="isDisabled" :class="inputClasses">
              </b-input>
            </b-field>
          </li>
        </ul>
        {{booking}}
        <div class="btn-wrapper">
          <a href="#" type="button" :class="saveButton.classes" v-on:click.prevent="saveUpdatedBooking">Spara</a>
          <a href="#" type="button" :class="editButton.classes" v-on:click.prevent="editBooking(content.id)">Redigera</a>
          <a href="#" type="button" class="btn-secondary" @click="getIdToDelete(content.id)">Ta bort</a>
        </div>
      </div>
      <!--/ny-->

    </div>
    <!--/booking-body-->
  </section>
</template>
<script>
  import {
    hideElement
  } from '@/functions/helpers.js';
  import {
    displayElement
  } from '@/functions/helpers.js';

  export default {
    data() {
      return {
        booking: {
          id: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          category: '',
          description: '',
          date: '',
          time: ''
        },
        saveButton: {
          classes: 'btn-primary hidden'
        },
        editButton: {
          classes: 'btn-primary'
        },
        isDisabled: true
      }
    },
    props: [
      'bookingContent'
    ],
    computed: {
      changeDisplayedButton: function (button) {
          console.log(button);
          this.button.display = !this.button.display;

          if (this.button.display) {
            this.button.classes = 'btn-primary';
          } else {
            this.button.classes = 'btn-primary hidden';
          }
        }
        /*,
        getInputToUpdate: function (bookingId) {
          this.newBooking = {
            id: bookingId,
            firstName: this.content.firstName,
            /*lastName: this.lastName,
            email: this.email,
            phone: this.phone,
            category: this.category,
            description: this.description,
            date: this.date,
            time: this.time
            }
        },
        handleInput: function (key, value) {
          this.updatedBooking.key = value;
        }*/
        ,
      inputClasses: function () {
        if (this.isDisabled) {
          return 'input';
        } else {
          return 'input input--edit';
        }
      }
    },
    methods: {
      getIdToDelete: function (bookingId) {
        this.$emit('getIdToDelete', bookingId);
      },
      getInputToUpdate: function (input) {
        console.log('hej');
      },
      saveUpdatedBooking: function () {
        this.isDisabled = 0;
        this.saveButton.classes = 'btn-primary hidden';
        this.editButton.classes = 'btn-primary';
        this.$emit('saveUpdatedBooking', this.booking);
      },
      /*clickAction: function () {
        this.isVisible = !this.isVisible;
      },*/
      editBooking: function (selectedBooking) {
        console.log(selectedBooking);
        /*
        for (let value of this.$props.bookingContent) {
          if (value.id === selectedBooking) {
            console.log(selectedBooking);
            console.log(value.id);

            /* Set this.booking to the selected booking */
        /*
          this.booking = {
            id: value.id,
            firstName: value.firstName,
            lastName: value.lastName,
            email: value.email,
            phone: value.phone,
            category: value.category,
            description: value.description,
            date: value.date,
            time: value.time
          }
        }
      }
      /* Set this.booking to selected booking to edit */
        /*this.booking = {
          id: selectedBooking.id,
          firstName: selectedBooking.firstName,
          lastName: selectedBooking.lastName,
          email: selectedBooking.email,
          phone: selectedBooking.phone,
          category: selectedBooking.category,
          description: selectedBooking.description,
          date: selectedBooking.date,
          time: selectedBooking.time
        }*/
        this.isDisabled = false;
        this.editButton.classes = 'btn-primary hidden';
        this.saveButton.classes = 'btn-primary';
      }
      /*const requestBody = {
        id: bookingId,
      };

      fetch("http://localhost:3001/bookings/delete", {
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
        body: JSON.stringify(requestBody),
      })
        .then((response) => {
          if (response.ok) {
            return;
          }
          const message = "Det gick inte att ta bort bokningen. Försök igen.";
          //this.triggerShowModal(message, true);
        })
        .then(() => {
          console.log('yes');
          //this.updateAdminState();
        });*/

    }
    /*
          computed: {
          accordionClasses: function () {
            return {
              'is-closed': !this.isOpen,
              'is-primary': this.isOpen,
              'is-dark': !this.isOpen
            };
          }
          }/*,
        data: function () {
          return {
            isOpen: false
          }
        }*/
  }

</script>
<style lang="scss">
  @import '@/scss/_main.scss';

  #single-booking-edit {
    width: 100%;

    .booking-content {
      background: $black;
      padding: 2rem 5rem;

      ul.booking-list {
        margin-top: 20rem;
        margin-bottom: 20rem;

        li {
          margin: 0.5rem;
          text-transform: none;
          letter-spacing: 0.15rem;
          display: flex;

          label {
            @include form-label;
            /*display: inline-block;
            letter-spacing: 1.5rem;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 1.1em;*/
          }

          .field {
            width: 100%;
            display: inline-block;
          }

          @include form-input;
          @include form-placeholder;
          /*.input {
            
            background: transparent;
            border: none;
            margin-top: -0.4rem;
            margin-left: 0.5rem;
            //width: 100%;
            //display: inline-block;
            //border-bottom: 1rem solid $lightGrey;
            //border-radius: 0rem;
            color: $white;
            font-family: 'Hind', sans-serif;
            letter-spacing: 1.5rem;
            padding: 0rem;

            //padding-bottom: 5rem;
            &:focus {
              border-color: none;
              box-shadow: none;
            }

            &--edit {
              background: black;
              padding: 3rem;
              width: 100%;
            }
          }

          input:-webkit-autofill,
          input:-webkit-internal,
          input:-webkit-selected,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus {
            background: transparent;
          }*/

          ::-webkit-input-placeholder {
            /* Chrome/Opera/Safari */
            color: $white;
            font-family: 'Hind', sans-serif;
            letter-spacing: 1.5rem;
          }

          ::-moz-placeholder {
            /* Firefox 19+ */
            color: $white;
            font-family: 'Hind', sans-serif;
            letter-spacing: 1.5rem;
          }

          :-ms-input-placeholder {
            /* IE 10+ */
            color: $white;
            font-family: 'Hind', sans-serif;
            letter-spacing: 1.5rem;
          }

          :-moz-placeholder {
            /* Firefox 18- */
            color: $white;
            font-family: 'Hind', sans-serif;
            letter-spacing: 1.5rem;
          }
        }
      }

      .btn-wrapper {
        a {
          margin-right: 5rem;
        }
      }
    }
  }

</style>
