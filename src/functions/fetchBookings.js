export function fetchBookings () { 
  /*axios.get('http://localhost:3001/bookings').then((res) => {
      console.log('score?');
      console.log(res);
  });*/
  fetch("http://localhost:3001/bookings", {
    host: 'localhost',
    // port to forward to
    port:   3001,
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
        this.bookings = fetchedBookings;
      }) 
}