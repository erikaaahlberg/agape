<template>
<section id="book">
  <div class="section-padding">
    <h2>Book</h2>
    <p>{{ bookings }}
    {{ hello }}</p>
  </div>
</section>
</template>

<script>
  //import fetchBookings from '../../services/fetchBookings.js';
  //console.log(fetchBookings);
    export default {
        name: 'Book',
        data: function() {
          return {
            bookings: [],
            hello: ''
          }
        },
        methods: {
          fetchBookings: function () {
            /*var xhr = new XMLHttpRequest();
            xhr.open('GET', 'ttp://localhost:3001/bookings', true);
            xhr.withCredentials = true;
            xhr.send(null);*/
            fetch("http://localhost:3001/bookings", {
               method: 'GET',
               headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
               }
            })
              .then(response => response.json())
                .then((fetchedBookings) => {
                  console.log(fetchedBookings);
                  this.bookings = fetchedBookings;
                })
          },
          sayHello: function () {
            this.hello = 'HELLO THEERE';
          } 
        },
        mounted: function() {
          this.fetchBookings();
          this.sayHello();
        }
    }
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
