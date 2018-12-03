// Exported to be used for both Admin and Booking-view.
function fetchBookings () { 
  fetch("/api/bookings")
  .then(response => response.json())
    .then((fetchedBookings) => {
      console.log(fetchedBookings);
      return fetchedBookings;
    }
  );
}

  /*fetchBookings: function () {
    fetch("/api/bookings", {
       method: 'GET',
       url: 'http://localhost:3001/bookings',
       headers: new Headers({
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       })
      })
      .then(response => console.log(response))
        .then((fetchedBookings) => {
          console.log(fetchedBookings);
          this.bookings = fetchedBookings
        })
  }*/