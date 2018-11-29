// Exported to be used for both Admin and Booking-view.
export const fetchBookings = () => fetch("api/bookings")
  .then(response => response.json())
  .then((fetchedBookings) => {
    return fetchedBookings;
  })