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