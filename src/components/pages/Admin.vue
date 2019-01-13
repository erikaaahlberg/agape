<template>
  <section id="admin-page">
    <h2><i class="fas fa-angle-right"></i> Bokningar</h2>
    <div class="bookings-wrapper section-padding">
      <booking :sortedBookings="sortedBookings" />
    </div>
  </section>
</template>

<script>
  import { fetchBookings } from '@/functions/fetching/getRequests.js';
  import { fetchBookedDates } from '@/functions/fetching/getRequests.js';
  import DisplayBooking from '@/components/partials/DisplayBooking.vue';

  export default {
    data: function () {
      return {
        sortedBookings: []
      }
    },
    components: {
      'booking': DisplayBooking
    },
    mounted: function () {
      this.sortBookings();
    },
    methods: {
      sortBookings: function () {
        /* Fetch booked dates and all bookings to create a new array of object sorted by dates */
        fetchBookedDates()
          .then((fetchedDates) => {
            let dateObject = this.sortByDate(fetchedDates);

            fetchBookings()
              .then((fetchedBookings) => {
                this.sortedBookings = this.addContentToObject(dateObject, fetchedBookings);
              });
          });
      },
      addContentToObject: function (dateObject, bookingContent) {
        for (let i = 0; i < dateObject.length; i++) {
          for (let a = 0; a < bookingContent.length; a++) {
            if (bookingContent[a].date === dateObject[i].date) {
              dateObject[i].content.push(bookingContent[a]);
            }
          }
        }
        return dateObject;
      },
      sortByDate: function (dateArray) {
        return dateArray.map((row) => {
          return {
            date: row.date,
            content: []
          }
        });
      }
    }
  }

</script>
<style lang="scss">
</style>
