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
  import fetchBookings from '@/functions/fetchBookings.js';

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
          },
          fetchBookings: function () { 
            /*axios.get('http://localhost:3001/bookings').then((res) => {
                console.log('score?');
                console.log(res);
            });*/
            fetch("http://localhost:3001/bookings", {
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
                  this.bookings = fetchedBookings;
                }) 
          },
            createBooking: function ($event) {
              console.log($event);
              let requestBody = $event;
              console.log(requestBody);
              fetch("http://localhost:3001/create", {
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
                    Välkommen till Kult den ${requestBody.date} kl.${requestBody.time}.
                    Vi ser fram emot besöket!`;
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
          this.fetchBookings();
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
@import '@/scss/_variables.scss';
#book{
  .form-wrapper{
    border-top: 1px solid $primaryBright;
    background: $black;
    padding: 50px;
  }}
  /*
  .btn-wrapper{
    text-align: center;
    margin-top: 20px;
    button{
      border-color: none;
      border-style: none;
    }
  }
  .input,
  .textarea{
    background: transparent;
    border: none;
    border-bottom: 1px solid $lightGrey;
    border-radius: 0px;
    color: white;
    font-family: 'Hind', sans-serif;
    letter-spacing: 1.5px;
    padding-bottom: 5px;
  }
  input.input:focus,
  textarea.textarea:focus,
  input.input:active,
  textarea.textarea:active{
    background: transparent;
    /*border: none;
    outline: none;
    border-bottom: 1px solid $white;
    box-shadow: none;
    border-radius: 0px;
  }
    ::-webkit-input-placeholder { /* Chrome/Opera/Safari 
    color: $lightGrey;
    font-family: 'Hind', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
  ::-moz-placeholder { /* Firefox 19+
    color: $lightGrey;
    font-family: 'Hind', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
  :-ms-input-placeholder { /* IE 10+ 
    color: $lightGrey;
    font-family: 'Hind', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
  :-moz-placeholder { /* Firefox 18- 
    color: $lightGrey;
    font-family: 'Hind', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
  .field{
    flex-basis: 45%;
  }
  .label{
    font-size: 1.2em;
    color: $white;
    letter-spacing: 1.5px;
  }
  
  /* Timepicker and datepicker 
  .icon i{
    color: $mediumGrey;
    margin-right: 5px;
  }
  .dropdown-content{
    background: $black;
  }
  .pickers-wrapper{
    width: 100%;
    display: flex; 
    justify-content: space-between;
				select {
					background: black;
					font-family: 'hind', sans-serif;
					text-transform: uppercase;
					letter-spacing: 1.5px;
					font-size: 1.1em;
					color: $white;
				}
  }
}

/*.field{
  flex-basis: 45%;
}
.book-input{
	flex-basis: 100%;
}

	.datepicker-wrapper{
    width: 50%;
		flex-basis: 45%;
	}*/

/*.input,
.textarea{
	background: transparent;
	border: none;
	border-bottom: 1px solid rgb(193, 163, 87);
	border-radius: 0px;
}*/

</style>
