export const fetchBookings = () => {
    return fetch("http://localhost:3001/bookings", {
       method: 'GET',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       }
    })
      .then(response => response.json())
        .then((fetchedBookings) => {
          console.log(fetchedBookings);
          return fetchedBookings;
          //this.bookings = fetchedBookings;
        })
  }