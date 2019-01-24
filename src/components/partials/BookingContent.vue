<template>
  <section class="display-booking-content">
    <div class="booking-body" v-for="(content, index) in bookingContent" :key="content.id" :index="index">
      <div class="booking-content" ref="items" :id="'booking-' + content.id">
        <h4>{{ content.time }}</h4>
        <ul class="booking-list">
          <li>
            <label for="firstName">Namn:</label>
            <b-field>
              <b-input :placeholder="content.firstName" :value="booking.firstName" @input="booking.firstName = $event"
                type="text" use-html5-validation :disabled="isDisabled" :class="inputClasses">
              </b-input>
            </b-field>
          </li>
          <li>
            <label for="lastName">Efternamn:</label>
            <b-field>
              <b-input :placeholder="content.lastName" :value="booking.lastName" @input="booking.lastName = $event"
                type="text" use-html5-validation :disabled="isDisabled" :class="inputClasses">
              </b-input>
            </b-field>
          </li>
          <li>
            <label for="email">Email:</label>
            <b-field>
              <b-input :placeholder="content.email" :value="booking.email" @input="booking.email = $event" type="email"
                use-html5-validation :disabled="isDisabled" :class="inputClasses">
              </b-input>
            </b-field>
          </li>
          <li>
            <label for="phone">Telefonnummer:</label>
            <b-field>
              <b-input :placeholder="content.phone" :value="booking.phone" @input="booking.phone = $event" type="tel"
                use-html5-validation :disabled="isDisabled" :class="inputClasses">
              </b-input>
            </b-field>
          </li>
          <li>
            <label for="category">Kategori:</label>
            <b-field>
              <b-input :placeholder="content.category" :value="booking.category" @input="booking.category = $event"
                type="text" use-html5-validation :disabled="isDisabled" :class="inputClasses">
              </b-input>
            </b-field>
          </li>
          <li>
            <label for="description">Beskrivning:</label>
            <b-field>
              <b-input :placeholder="content.description" :value="booking.description" @input="booking.description = $event"
                type="text" use-html5-validation :disabled="isDisabled" :class="inputClasses">
              </b-input>
            </b-field>
          </li>
          <li>
            <label for="phone">Datum:</label>
            <b-field>
              <b-input :placeholder="content.date" :value="booking.date" @input="booking.date = $event" type="text"
                use-html5-validation :disabled="isDisabled" :class="inputClasses">
              </b-input>
            </b-field>
          </li>
          <li>
            <label for="phone">Tid:</label>
            <b-field>
              <b-input :placeholder="content.time" :value="booking.time" @input="booking.time = $event" type="text"
                use-html5-validation :disabled="isDisabled" :class="inputClasses">
              </b-input>
            </b-field>
          </li>
        </ul>
        <div class="btn-wrapper">
          <a href="#" type="button" :class="saveButton" v-on:click="saveUpdatedBooking">Spara</a>
          <a href="#" type="button" :class="saveButton" v-on:click.prevent="cancelEdit">Avbryt</a>
          <a href="#" type="button" :class="editButton" v-on:click.prevent="editBooking(content, index)">Redigera</a>
          <a href="#" type="button" class="btn-red" @click="getIdToDelete(content.id)">Ta bort</a>
        </div>
      </div>
    </div>
    <!--/booking-body-->
  </section>
</template>

<script>
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
        isModalVisible: false,
        edit: false
      }
    },

    props: [
      'bookingContent',
      'isOpen'
    ],

    computed: {
      editButton: function () {
        if (this.edit) {
          return 'hidden';
        } else {
          return 'btn-purple';
        }
      },
      
      saveButton: function () {
        if (this.edit) {
          return 'btn-purple';
        } else {
          return 'hidden';
        }
      },

      isDisabled: function () {
          return !this.edit;
      },

      inputClasses: function () {
        if (!this.edit) {
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

      saveUpdatedBooking: function () {
        this.$emit('saveUpdatedBooking', this.booking);
        this.edit = false;
        this.displayAllBookings();
      },

      displayAllBookings: function () {
        for (let item of this.$refs.items) {
          this.displayElement(item);
        }
      },

      hideElement: function (element) {
        element.style.display = 'none';
      },

      displayElement: function (element) {
        element.style.display = 'block';
      },

      editBooking: function (selectedBooking, selectedIndex) {
        this.edit = true;
        for (let i = 0; i < this.$refs.items.length; i++) {
          if (i !== selectedIndex) {
            this.hideElement(this.$refs.items[i]);
          }
        }
        /* Set this.booking to the selected booking */
        this.booking = {
          id: selectedBooking.id,
          firstName: selectedBooking.firstName,
          lastName: selectedBooking.lastName,
          email: selectedBooking.email,
          phone: selectedBooking.phone,
          category: selectedBooking.category,
          description: selectedBooking.description,
          date: selectedBooking.date,
          time: selectedBooking.time
        }
      },

      cancelEdit: function () {
        this.edit = false;
        this.clearBooking();
        this.displayAllBookings();
      },

      clearBooking: function () {
        if (!this.edit) {
          this.booking = {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            category: '',
            description: '',
            date: '',
            time: ''
          }
        }
      }
    }
  }

</script>
<style lang="scss">
  @import '@/scss/_main.scss';

  .display-booking-content {
    width: 100%;

    .booking-content {
      background: $black;
      padding: 2rem 5rem;
      @include form-placeholder($white);

      ul.booking-list {
        margin-top: 2rem;
        margin-bottom: 2rem;

        li {
          margin-bottom: 0.5rem;
          text-transform: none;
          //letter-spacing: 0.15rem;
          display: flex;

          label {
            @include form-label;
            margin-right: 0.5rem;
          }

          .field {
            width: 100%;
            display: inline-block;
          }

          .input {
            @include form-input;
            border: none;
            
            &--edit {
              border-bottom: 0.1rem solid $mediumGrey;
              padding: 0rem;
              width: 100%;
            }
          }
        }
      }

      .btn-wrapper {
        a {
          margin-right: 0.5rem;
        }
      }
    }
  }

</style>
