<template>
<section id="book" class="section-padding">
    <h2>Book</h2>
    <p>{{ bookings }}
    {{ hello }}</p>
      <booking-form/>
      <div class="pickers-wrapper">
        <datepicker/>
        <timepicker/>
      </div>
</section>
</template>

<script>
  import Datepicker from '../partials/DatePicker'
  import BookingForm from '../partials/BookingForm'
  import Timepicker from '../partials/Timepicker'

    export default {
        name: 'Book',
        data: function() {
          return {
            bookings: [],
            hello: ''
          }
        },
        methods: {
          fetchBookings: function () {
            fetch("http://localhost:3001/bookings", {
               method: 'GET',
               headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
               }
            })
              .then(response => response.json())
                .then((fetchedBookings) => {
                  console.log(fetchedBookings);
                  this.bookings = fetchedBookings;
                })
          },
          sayHello: function () {
            this.hello = 'HELLO THEERE';
          } 
        },
        mounted: function() {
          this.fetchBookings();
          this.sayHello();
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
<style>
.pickers-wrapper{
  width: 100%;
  display: flex; 
  justify-content: space-between;
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
.input,
.textarea{
	background: transparent;
	border: none;
	border-bottom: 1px solid rgb(193, 163, 87);
	border-radius: 0px;
	}
/*.input,
.textarea{
	background: transparent;
	border: none;
	border-bottom: 1px solid rgb(193, 163, 87);
	border-radius: 0px;
}*/
input.input:focus,
textarea.textarea:focus,
input.input:active,
textarea.textarea:active{
	background: transparent;
	border: none;
	outline: none !important;
	border-bottom: 1px solid red;
	border-radius: 0px;
}
</style>
