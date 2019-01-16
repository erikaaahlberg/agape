<template>
        <div class="booking-body">

        <!--ny komponent-->  
          <div class="booking-content">
            <h4> {{ bookingContent.time }} </h4>

            <ul class="bookings__list">
              <li><label for="firstName">Namn:</label> {{ bookingContent.firstName }} </li>
              <li><label for="lastName">Efternamn:</label> {{ bookingContent.lastName }} </li>
              <li><label for="email">Email:</label> {{ bookingContent.email }} </li>
              <li><label for="phone">Telefonnummer:</label> {{ bookingContent.phone }} </li>
              <li><label for="category">Kategori:</label> {{ bookingContent.category }} </li>
              <li><label for="description">Beskrivning:</label> {{ bookingContent.description }} </li>
            </ul>

            <div class="btn-wrapper">
              <a href="#" type="button" class="btn-purple">Redigera</a>
              <a href="#" type="button" class="btn-red">Ta bort</a>
            </div>
          </div>
        <!--/ny-->

        </div>
        <!--/booking-body-->
</template>

<script>
  //import fetchBookings from '@/functions/fetchBookings.js';

  export default {
    props: [
			'dates',
      'bookingContent'
    ],
    data() {
      return {
        isOpen: false
      }
		},
		mounted: function () {
			console.log(this.$props.bookingContent);
		},
    methods: {
      toggleAccordion: function () {
        this.isOpen = !this.isOpen;
			}
		},
    computed: {
      accordionClasses: function () {
        return {
          'is-closed': !this.isOpen,
          'is-primary': this.isOpen,
          'is-dark': !this.isOpen
        };
      }
    }
  }

</script>
<style lang="scss">
  @import '@/scss/_variables.scss';

  .booking-content {
    background: $black;
    padding: 20px 50px;

    ul {
      margin-top: 20px;
      margin-bottom: 20px;

      li {
        margin: 5px;

        label {
          letter-spacing: 1.5px;
          font-weight: 600;
        }
      }
    }

    .btn-wrapper {
      a {
        margin-right: 5px;
      }
    }
  }

  /* Vue accordion */
  .booking {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .booking-header {
    cursor: pointer;
  }

  .booking-body {
    padding: 0;
    //max-height: 10em;
    overflow: hidden;
    transition: 0.3s ease all;
  }

  .is-closed .booking-body {
    max-height: 0;
  }

</style>
