<template>
  <section>
    <div class="accordion-wrapper">
      <div class="booking" :class="accordionClasses">
        <ul class="bookings-accordion">
          <li v-for="date in sortedBookings" :key="date.date" class="booking-header" @click="toggleAction(date.content)">
            {{ date.date }}
          </li>
        </ul>
        <single-booking :bookingContent="content" v-on:getIdToDelete="emitIdToDelete($event)" v-on:saveUpdatedBooking="emitBookingToUpdate($event)" />
      </div>
    </div>

  </section>
</template>
<script>
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
      },
      emitIdToDelete: function ($event) {
        this.$emit('emitIdToDelete', $event);
      },
      emitBookingToUpdate: function ($event) {
        this.$emit('emitBookingToUpdate', $event);
      }
    }
  }

</script>
<style lang="scss">
  @import '@/scss/_main.scss';

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
		@include link ($white, $primary);
    font-size: 1.2em;
    /*cursor: pointer;
    font-weight: 600;*/
    margin-bottom: 0.5rem;
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
