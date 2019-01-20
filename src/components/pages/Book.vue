<template>
<section id="book-page">
  <h2><i class="fas fa-angle-right"></i> Boka direkt</h2>
  <div class="section-padding">
    <div class="form-wrapper">
      <booking-form v-on:sendBooking="createBooking($event)"/>
      <!--<div class="pickers-wrapper">
        <datepicker/>
        <timepicker/>
      </div>
      <div class="btn-wrapper">
        <button type="button" class="btn-purple">Boka nu</button>
      </div>-->
    </div>
  </div>
</section>
</template>

<script>
  import Datepicker from '@/components/partials/DatePicker';
  import BookingForm from '@/components/partials/BookingForm';
  import Timepicker from '@/components/partials/Timepicker';
  import { fetchBookings } from '@/functions/fetching/getRequests.js';
  import { fetchBookedDates } from '@/functions/fetching/getRequests.js';

  const bodyParser = require('body-parser');
  let cors = require('cors');
  var http = require('http');

  import axios from 'axios'
  import VueAxios from 'vue-axios'
 
    export default {
        name: 'Book',
        data: function() {
          return {
            bookings: [],
            hello: ''
          }
        },
        methods: {
           onChildClick: function (value) {
            console.log(this.fromBookingForm = value);
           },/*
          fetchBookedDates: function () {
            fetchBookings()
            .then((fetchedBookings) => {
              const bookedDates = fetchedBookings.map((row) => {
                return { 
                  date: row.date, 
                  time: row.time 
                };
              });
              //console.log(booked);
              console.log(bookedDates);
            });
          },*/
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
          fetchAllBookings: function () { 
            /*axios.get('http://localhost:3001/bookings').then((res) => {
                console.log('score?');
                console.log(res);
            });*/
            fetch("http://localhost:3001/allBookings", {
              host: 'localhost',
              // port to forward to
              port:   3001,
              // path to forward to
              //path:   '/api/bookings',
               method: 'GET',
               headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
               }
            })
              .then(response => response.json())
                .then((fetchedBookings) => {
                  console.log(fetchedBookings);
                  //this.bookings = fetchedBookings;
                }) 
          },
            createBooking: function ($event) {
              console.log($event);
              let requestBody = $event;
              console.log(requestBody);
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
                  //const { name, date, session } = this.state.booking;

                  if (response.ok) {
                    const message = `Tack ${requestBody.firstName} för din bokning!
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
              /*const requestBody = JSON.stringify($event);
              axios.post('http://localhost:3001/create', requestBody, {
                method: 'post',
                url: '/create',
                data: requestBody,
                baseURL: 'http://localhost:3001/'
              }).then((res) => {
                console.log('score?');
            });
              }
              const requestBody = {
                firstName: input.firstName,
                lastName: input.lastName, 
                email: input.email,
                phone: input.phone,
                category: input.category,
                description: input.description,
                date: input.date,
                time: input.time
                /*date: booking.date,
                guests: booking.guests,
                session: booking.session,
                name: booking.name,
                email: booking.email,
                phone: booking.phone,
            };
console.log(requestBody);
axios.post('/api/create_booking', {requestBody}).then((res) => {
                console.log('score?');
            });

              /*fetch("/api/create_booking", {
                method: 'POST',
                headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
               },
                body: JSON.stringify(requestBody),
              })
                .then((response) => {
                  //const { name, date, session } = this.state.booking;

                  if (response.ok) {
                    const message = `Tack ${requestBody.firstName} för din bokning!
                    Välkommen till Kult den ${requestBody.date} kl.${requestBody.time}.
                    Vi ser fram emot besöket!`;
                    console.log(message);
                    //this.triggerShowModal(message, true);
                  } else {
                    const message = "Bokningen misslyckades, försök igen.";
                    //this.triggerShowModal(message, true);
                    console.log(message);
                  }
                });
            }*/

        },
        mounted: function() {
          this.fetchBookedDates();
        },
        components: {
          'booking-form': BookingForm,
          'datepicker': Datepicker,
          'timepicker': Timepicker
        }
    }
    /*    methods: {
          function (fetchBookings) {
            fetch("api/bookings")
            .then(response => response.json())
            .then((fetchedBookings) => {
              return fetchedBookings;
            })
          }
        }
    };*/
    /*export default {
        name: 'Home',
  computed: {
    username () {
      // We will see what `params` is shortly
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '@/scss/_main.scss';

  #book-page{
    .form-wrapper{
      border-top: 0.1rem solid $primaryBright;
      background: $black;
      padding: 5rem;
      max-width: 100rem;
      margin: auto;
    }
  }
</style>
