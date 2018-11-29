<template>
<section id="book">
  <div class="section-padding">
    <h2>Book</h2>
    <!--{{ fetchedBookings }}-->
  </div>
</section>
</template>

<script>
  import fetchBookings from '../services/fetchBookings';
  console.log(fetchBookings);
  /*  export default {
        name: 'Book',
        data: function() {
          return {
            this.
          }
        }
    }*/
    /*    methods: {
          function (fetchBookings) {
            fetch("api/bookings")
            .then(response => response.json())
            .then((fetchedBookings) => {
              return fetchedBookings;
            })
          }
        }
    };*/
    /*export default {
        name: 'Home',
  computed: {
    username () {
      // We will see what `params` is shortly
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.purple{
  background: transparent;
  height: 200px;
}
</style>
