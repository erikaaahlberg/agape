<template>
  <section id="book-page">
    <h2><i class="fas fa-angle-right"></i> Boka tid direkt</h2>
    <div class="form-wrapper">
      <div class="form-container">
        <booking-form v-on:emitBooking="createBooking($event)" :bookingStatus="bookingStatus"/>
      </div>
    </div>
  </section>
</template>

<script>
  import BookingForm from '@/components/partials/BookingForm.vue';

  const bodyParser = require('body-parser');
  let cors = require('cors');
  var http = require('http');

  export default {
    name: 'Book',
    
    data: function () {
      return {
        bookingStatus: null
      }
    },

    components: {
      'booking-form': BookingForm
    },

    methods: {
      createBooking: function ($event) {
        let requestBody = $event;

        fetch("http://localhost:3001/bookings/create", {
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
            .then((confirm) => {
              this.bookingStatus = confirm;
          });
      }
    }
  }
</script>

<style lang="scss">
  @import '@/scss/_main.scss';

  #book-page {

    .form-wrapper {
      @include section;

      .form-container {
        @include container-padding;
        border-bottom: 0.1rem solid $lightGrey;
        background: $black;
        max-width: 60rem;
        margin: auto;
      }
    }
  }

</style>
