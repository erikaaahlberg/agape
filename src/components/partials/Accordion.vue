<template>
  <section>
      <div class="booking" :class="accordionClasses">
        <li class="booking-header" @click="toggleAccordion"> {{ item.date }} </li>
        <div class="booking-body">

        
        <!--ny komponent-->  
          <div class="booking-content">
            <h4> {{ item.time }} </h4>

            <ul class="bookings__list">
              <li><label for="firstName">Namn:</label> {{ item.firstName }} </li>
              <li><label for="lastName">Efternamn:</label> {{ item.lastName }} </li>
              <li><label for="email">Email:</label> {{ item.email }} </li>
              <li><label for="phone">Telefonnummer:</label> {{ item.phone }} </li>
              <li><label for="category">Kategori:</label> {{ item.category }} </li>
              <li><label for="description">Beskrivning:</label> {{ item.description }} </li>
            </ul>

            <div class="btn-wrapper">
              <a href="#" type="button" class="btn-purple">Redigera</a>
              <a href="#" type="button" class="btn-red">Ta bort</a>
            </div>
          </div>
        <!--/ny-->

        </div>
        <!--/booking-body-->
        
      </div>
      <!--/booking-->
  </section>
</template>

<script>
  //import fetchBookings from '@/functions/fetchBookings.js';

  export default {
    props: [
      'item'
    ],
    data() {
      return {
        isOpen: false
      }
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
