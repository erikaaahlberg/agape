<template>
  <section id="admin-page">
    <h2><i class="fas fa-angle-right"></i> Bokade datum</h2>
    <div class="bookings-wrapper section-padding">
      <booking/>
    </div>
  </section>
</template>
<script>
  import fetchBookings from '@/functions/fetchBookings.js';
  import DisplayBooking from '@/components/partials/DisplayBooking.vue';
  //var bcrypt = require('bcryptjs');

  export default {
    data() {
      const today = new Date()
      return {
        date: new Date(),
        minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        maxDate: new Date(today.getFullYear(), today.getMonth() + 6, today.getDate())
      }
    },
    components: {
      'booking': DisplayBooking
    },
    mounted: function() {
      fetchBookings()
        .then((fetchedBookings) => {
              const bookedDates = fetchedBookings.map((row) => {
                return { 
                  date: row.date, 
                  time: row.time 
                };
              });
              //console.log(booked);
              console.log(bookedDates);
            });
    }
  }

</script>
<style lang="scss"></style>
