<template>
  <section id="book-page">
    <h2><i class="fas fa-angle-right"></i> Boka tid direkt</h2>
    <div class="form-wrapper">
      <div class="form-container">
        <booking-form v-on:sendBooking="createBooking($event)" />
      </div>
    </div>
  </section>
</template>

<script>
  import BookingForm from '@/components/partials/BookingForm.vue';
  import { fetchBookings } from '@/functions/recurringFetch.js';
  import { fetchBookedDates } from '@/functions/recurringFetch.js';

  const bodyParser = require('body-parser');
  let cors = require('cors');
  var http = require('http');

  export default {
    name: 'Book',
    data: function () {
      return {
        bookings: []
      }
    },
    components: {
      'booking-form': BookingForm
    },
    methods: {
      filterDuplicateDates: function (bookings) {
        /* Check for bookings on the same date */
        const duplicateDates = [];
        const lastIndex = bookings.length - 1;
        for (let i = 0; i < bookings.length; i++) {
          if (i !== lastIndex) {
            for (let p = i + 1; p < bookings.length; p++) {
              if (bookings[i].date === bookings[p].date) {
                duplicateDates.push(bookings[i].date);
              }
            }
          }
        }
        //return duplicateDates;
        console.log(duplicateDates);
      },
      filterBookedTimes: function (duplicateDates, bookedDates) {
        console.log('hej');
      },

      findFullyBookedDates: function (bookedDates) {
        console.log('hej');
      },

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
          .then((response) => {

            if (response.ok) {
              const message =
                `Tack ${requestBody.firstName} för din bokning!
                    Varmt välkommen till Agape den ${requestBody.date} kl.${requestBody.time}!`;
              console.log('yes');
              //this.triggerShowModal(message, true);
            } else {
              const message = "Bokningen misslyckades, försök igen.";
              //this.triggerShowModal(message, true);
              console.log('no');
            }
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
