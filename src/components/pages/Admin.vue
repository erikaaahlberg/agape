<template>
  <section id="admin-page">
    <h2><i class="fas fa-angle-right"></i> Bokningar</h2>
    <div class="bookings-wrapper section-padding">
      <bookings :sortedBookings="sortedBookings" v-on:emitIdToDelete="deleteBooking($event)"/>
    </div>
  </section>
</template>

<script>
  import { fetchBookings } from '@/functions/fetching/getRequests.js';
  import { fetchBookedDates } from '@/functions/fetching/getRequests.js';
  import DisplayBookings from '@/components/partials/DisplayBookings.vue';

  export default {
    data: function () {
      return {
        sortedBookings: []
      }
    },
    components: {
      'bookings': DisplayBookings
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
      },
      deleteBooking: function ($event) {
        const requestBody = {
          id: $event,
        };

      fetch("http://localhost:3001/bookings/delete", {
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
        body: JSON.stringify(requestBody),
      })
        .then((response) => {
          if (response.ok) {
            return;
          }
          const message = "Det gick inte att ta bort bokningen. Försök igen.";
          //this.triggerShowModal(message, true);
        })
        .then(() => {
          console.log('yes');
        });
      }
    }
  }

</script>
<style lang="scss">
</style>
