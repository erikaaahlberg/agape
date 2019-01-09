<template>
</template>
<script>
  import fetchBookings from '@/functions/fetchBookings.js';
  var bcrypt = require('bcryptjs');

  export default {
    data() {
      const today = new Date()
      return {
        date: new Date(),
        minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        maxDate: new Date(today.getFullYear(), today.getMonth() + 6, today.getDate())
      }
    }
  }

</script>
<style lang="scss"></style>
