<template>
  <section id="admin-page">
    <h2><i class="fas fa-angle-right"></i> Bokningar</h2>
    <div class="bookings-wrapper section-padding">
      <div class="accordion-wrapper">
        <ul class="bookings-accordion">
          <booking :sortedBookings="sortedBookings" />
        </ul>
      </div>
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
      //this.fetchAllBookings();
      //this.sortByDate(this.allBookings, this.bookedDates);
      /*
      this.fetchAllBookings();
      this.sortByDate(this.allBookings, this.bookedDates);*/
      //console.log(this.allBookings);
      //console.log(this.bookedDates);
      /*
      console.log(this.bookedDates);
      this.bookedDates = '2018';
      console.log(this.bookedDates);
      */
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
      fetchBookedDates: function () {
        fetch("http://localhost:3001/bookings/dates", {
            host: 'localhost',
            // port to forward to
            port: 3001,
            // path to forward to
            //path:   '/api/bookings',
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then((fetchedDates) => {
            /* Creating a new object to be able to sort bookings by dates */
            const bookedDates = fetchedDates.map((row) => {
              return {
                date: row.date,
                content: []
              }
            });
            this.bookedDates = bookedDates;
          });
      },
      sortByDate: function (dateArray) {
        return dateArray.map((row) => {
          return {
            date: row.date,
            content: []
          }
        });
      },
      fetchAllBookings: function () {
        fetch("http://localhost:3001/bookings", {
            host: 'localhost',
            // port to forward to
            port: 3001,
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
            const bookings = fetchedBookings.map((row) => {
              return row;
            });
            //console.log(fetchedBookings[0].date);
            //this.sortByDate(fetchedBookings, this.bookedDates);
            this.allBookings = fetchedBookings;
          });
      },
      sortByDates: function (bookings, bookedDates) {
        //let sorted = [];
        console.log(bookings[0]);
        console.log(bookings.length);
        console.log(bookedDates);

        for (let i = 0; i < bookedDates.length; i++) {
          console.log(bookedDates[i]);

          /*for (let a = 0; a < bookings.length; a++) {
            console.log(bookedDates[i]);
          }
          //console.log(bookings[i].date);
          /*const sorted = bookings.map(function(row) {
            if (row.date === bookedDates[i]){
              return {
                content: row
              };
            }
          });
          console.log(sorted);
          //content = [];
          /*sorted.push(
            {
              date: bookedDates[i],
              bookings: []
            }
          );*/
        }
        /*for (let i = 0; i < bookings.length; i++){
            console.log(bookings[i].date);
            console.log(bookedDates[i].date);
          if (bookings[i].date === bookedDates[i].date) {
            console.log(bookings[i].date);
            /*sorted.push(
              {
                date: bookings[i].date,
                content: bookings[i]
              }
            );*/
        /*
                  }
                }
                /*const sorted = bookings.map((row) => {
                  if (row.date === bookings.date) {
                    return {
                      date: row.date,
                      bookingContent: row
                    };
                  }
                });*/
      }
    }
  }

</script>
<style lang="scss">
</style>
