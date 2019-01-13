<template>
<section>
      <div class="accordion-wrapper">
        <ul class="bookings-accordion">
          <div class="booking" 
        :class="accordionClasses">
        <li v-for="date in sortedBookings" 
        :key="date.date" 
        class="booking-header" 
        @click="toggleAction(date.content)">
          {{ date.date }} 
        </li>
        <single-booking :bookingContent="content"/>
      </div>
        </ul>
      </div>
        
  </section>
</template>
<script>
  import Accordion from '@/components/partials/Accordion.vue';
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
