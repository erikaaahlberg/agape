<template>
<section>
      <div class="accordion-wrapper">
          <div class="booking" 
        :class="accordionClasses">
        <ul class="bookings-accordion">
        <li v-for="date in sortedBookings" 
        :key="date.date" 
        class="booking-header" 
        @click="toggleAction(date.content)">
          {{ date.date }} 
        </li>
        </ul>
        <single-booking :bookingContent="content"/>
      </div>
      </div>
        
  </section>
</template>
<script>
  //import Accordion from '@/components/partials/Accordion.vue';
  import BookingContent from '@/components/partials/BookingContent.vue';

  export default {
    props: [
      'sortedBookings'
    ],
    components: {
      'single-booking': BookingContent
    },
    computed: {
      accordionClasses: function () {
        return {
          'is-closed': !this.isOpen,
          'is-primary': this.isOpen,
          'is-dark': !this.isOpen
        };
      }
    },
    data: function () {
      return {
        isOpen: false,
        content: []
      }
    },
    methods: {
      toggleAction: function (content) {
        this.isOpen = !this.isOpen;
        this.content = content;
      }
    }
  }

</script>
<style lang="scss">
  @import '@/scss/_variables.scss';

/*  .booking-content {
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
  }*/

  /* Vue accordion */
  .booking {
    margin: auto; 
    width: 100%;
    display: flex;
  }
  .bookings-accordion {
    flex-basis: 20%;
  }

  .booking-header {
    cursor: pointer;
    font-size: 1.2em;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .booking-body {
    flex-basis: 80%;
    padding: 0;
    max-height: 100%;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
  }

  .is-closed .booking-body {
    max-height: 0;
  }

</style>
