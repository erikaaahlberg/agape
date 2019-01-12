<template>
  <section id="admin-page">
    <h2><i class="fas fa-angle-right"></i> Bokade datum</h2>
    <div class="bookings-wrapper section-padding">
      <booking :bookedDates="bookedDates"/>
      {{bookedDates}}
    </div>
  </section>
</template>
<script>
  import fetchBookings from '@/functions/fetching/fetchBookings.js';
  import fetchBookedDates from '@/functions/fetching/fetchBookedDates.js';
  import filterBookedDates from '@/functions/filtering/filterBookedDates.js';
  import DisplayBooking from '@/components/partials/DisplayBooking.vue';

  export default {
    data: function () {
      return {
        bookedDates: []
      }
    },
    components: {
      'booking': DisplayBooking
    },
    methods: {
      fetchDates: function () {
        fetchBookedDates()
            .then((fetchedDates) => {
              /*const bookedDates = fetchedBookings.map((row) => {
                return { 
                  date: row.date, 
                  time: row.time 
                };
              });*/
              //console.log(booked);
              //this.bookedDates = fetchedDates;
              /*const datesArray = fetchedDates.map((row) => {
                return row.date;
              });*/
              
              //console.log(datesArray);
              this.bookedDates = fetchedDates;
              //return datesArray;
            });
      }
      },
    mounted: function () {
      this.fetchDates();
      /*console.log(this.bookedDates);
      this.bookedDates = '2018';
      console.log(this.bookedDates);*/
    }
  }

</script>
<style lang="scss">
</style>
