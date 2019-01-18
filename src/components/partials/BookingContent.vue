<template>
<section>
    <div class="booking-body" 
        v-for="(content, index) in bookingContent" 
        :key="content.id"
        :index="index">
          <div class="booking-content" ref="items"
          :id="'booking-' + content.id">
            <h4>{{ content.time }}</h4>
            <ul class="booking-list">
              <li>
                <label for="firstName">Namn:</label>
                  <b-field>
                    <b-input 
                    :placeholder="content.firstName"
                    :value="booking.firstName"
                    @input="booking.firstName = $event"
                    type="text" 
                    use-html5-validation
                    :disabled="isDisabled"
                    :class="inputClasses">
                    </b-input>
                </b-field> 
              </li>
              <li>
                <label for="lastName">Efternamn:</label>
                  <b-field>
                    <b-input 
                    :placeholder="content.lastName"
                    :value="booking.lastName"
                    @input="booking.lastName = $event" 
                    type="text" 
                    use-html5-validation
                    :disabled="isDisabled"
                    :class="inputClasses">
                    </b-input>
                </b-field> 
              </li>
              <li>
                <label for="email">Email:</label>
                  <b-field>
                    <b-input 
                    :placeholder="content.email" 
                    :value="booking.email"
                    @input="booking.email = $event"
                    type="email" 
                    use-html5-validation
                    :disabled="isDisabled"
                    :class="inputClasses">
                    </b-input>
                </b-field> 
              </li>
              <li>
                <label for="phone">Telefonnummer:</label> 
                  <b-field>
                    <b-input 
                    :placeholder="content.phone"
                    :value="booking.phone"
                    @input="booking.phone = $event"
                    type="tel" 
                    use-html5-validation
                    :disabled="isDisabled"
                    :class="inputClasses">
                    </b-input>
                </b-field> 
              </li>
              <li>
                <label for="category">Kategori:</label> 
                  <b-field>
                    <b-input 
                    :placeholder="content.category"
                    :value="booking.category"
                    @input="booking.category = $event" 
                    type="text"  
                    use-html5-validation
                    :disabled="isDisabled"
                    :class="inputClasses">
                    </b-input>
                </b-field> 
              </li>
              <li>
                <label for="description">Beskrivning:</label>
                  <b-field>
                    <b-input 
                    :placeholder="content.description"
                    :value="booking.description"
                    @input="booking.description = $event" 
                    type="text"  
                    use-html5-validation
                    :disabled="isDisabled"
                    :class="inputClasses">
                    </b-input>
                </b-field> 
              </li>
              <li>
                <label for="phone">Datum:</label> 
                  <b-field>
                    <b-input 
                    :placeholder="content.date"
                    :value="booking.date"
                    @input="booking.date = $event"
                    type="text" 
                    use-html5-validation
                    :disabled="isDisabled"
                    :class="inputClasses">
                    </b-input>
                </b-field> 
              </li>
              <li>
                <label for="phone">Tid:</label> 
                  <b-field>
                    <b-input 
                    :placeholder="content.time" 
                    :value="booking.time"
                    @input="booking.time = $event"
                    type="text" 
                    use-html5-validation
                    :disabled="isDisabled"
                    :class="inputClasses">
                    </b-input>
                </b-field> 
              </li>
            </ul>
{{booking}}
            <div class="btn-wrapper">
              <a href="#" type="button" :class="saveButton" v-on:click="saveUpdatedBooking">Spara</a>
              <a href="#" type="button" :class="editButton" v-on:click.prevent="editBooking(content, index)">Redigera</a>
              <a href="#" type="button" class="btn-red" @click="getIdToDelete(content.id)">Ta bort</a>
            </div>
          </div>
        </div>
        <!--/booking-body-->
				</section>
</template>
<script>
  import Modal from '@/components/partials/Modal.vue';

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
  data () {
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
      /*

      booking: {
        id: '',
        firstName: this.$props.bookingContent.id,
        lastName: this.$props.bookingContent.id,
        email: this.$props.bookingContent.id,
        phone: this.$props.bookingContent.id,
        category: this.$props.bookingContent.id,
        description: this.$props.bookingContent.id,
        date: this.$props.bookingContent.id,
        time: this.$props.bookingContent.id
      },
      saveButton: {
        classes: 'btn-purple hidden'
      },
      editButton: {
        classes: 'btn-purple'
      },*/
      /*bookingContentClasses: 'booking-content',
      selectedIndex: '',
      isDisabled: true,*/
      edit: false
    }
  },
  props: [
    'bookingContent',
    'isOpen'
  ],
  computed: {
    /*displayButton: function () {
      return [
        {
          saveButton: {
            'btn-purple hidden': this.edit,
            'btn-purple': !this.edit
          },
          editButton: {
            'btn-purple hidden': !this.edit,
            'btn-purple': this.edit
          }
        }
      ];
    },*/
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
    }*/,
    inputClasses: function () {
      if (!this.edit) {
        return 'input';
      } else {
        return 'input input--edit';
      }
    }
  },
  methods: {/*
    bookingContentClasses: function () {
      return 'booking-content';
    },*/
    getIdToDelete: function (bookingId) {
      this.$emit('getIdToDelete', bookingId);
    },
    saveUpdatedBooking: function () {
      this.$emit('saveUpdatedBooking', this.booking);
      this.edit = false;
      //this.isDisabled = true;
      /*this.saveButton.classes = 'btn-purple hidden';
      this.editButton.classes = 'btn-purple';*/
      for (let item of this.$refs.items) {
        this.displayElement(item);
      }
    },
    /*clickAction: function () {
      this.isVisible = !this.isVisible;
    },
    
      showModal: function () {
        this.isModalVisible = true;
      },
      closeModal: function() {
        this.isModalVisible = false;
      },*/
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
      /*for (let item of this.$refs.items) {
        console.log(item);
      }*/
      //this.$refs.items[selectedIndex].classList.remove('hidden');
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
      /*this.isDisabled = false;
      this.editButton.classes = 'btn-purple hidden';
      this.saveButton.classes = 'btn-purple';*/
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
    
  }/*
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
  @import '@/scss/_variables.scss';
  section {
    width: 100%;
      .booking-content {
      background: $black;
      padding: 20px 50px;

      ul.booking-list {
        margin-top: 20px;
        margin-bottom: 20px;

        li {
          margin: 5px;
          text-transform: none;
          letter-spacing: 1.5px;
          display: flex;
          label {
            display: inline-block;
            letter-spacing: 1.5px;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 1.1em;
          }
          .field {
            width: 100%;
            display: inline-block;
          }
          .input {
            background: transparent;
            border: none;
            margin-top: -4px;
            margin-left: 5px;
            //width: 100%;
            //display: inline-block;
            //border-bottom: 1px solid $lightGrey;
            //border-radius: 0px;
            color: $white;
            font-family: 'Hind', sans-serif;
            letter-spacing: 1.5px;
            padding: 0px;
            //padding-bottom: 5px;
            &:focus {
              border-color: none;
              box-shadow: none;
            }
            &--edit {
              background: black;
              padding: 3px;
              width: 100%;
            }
          }
          input:-webkit-autofill,input:-webkit-internal, input:-webkit-selected,
          input:-webkit-autofill:hover, 
          input:-webkit-autofill:focus {
            background: transparent;
          }
          ::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: $white;
          font-family: 'Hind', sans-serif;
          letter-spacing: 1.5px;
        }

        ::-moz-placeholder {
          /* Firefox 19+ */
          color: $white;
          font-family: 'Hind', sans-serif;
          letter-spacing: 1.5px;
        }

        :-ms-input-placeholder {
          /* IE 10+ */
          color: $white;
          font-family: 'Hind', sans-serif;
          letter-spacing: 1.5px;
        }

        :-moz-placeholder {
          /* Firefox 18- */
          color: $white;
          font-family: 'Hind', sans-serif;
          letter-spacing: 1.5px;
        }
        }
      }

      .btn-wrapper {
        a {
          margin-right: 5px;
        }
      }
    }
  }
</style>