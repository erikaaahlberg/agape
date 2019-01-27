const bodyParser = require('body-parser');
let cors = require('cors');
var http = require('http');

export function fetchBookings () {
  return fetch("http://localhost:3001/bookings", {
      host: 'localhost',
      port: 3001,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
			.then((fetchedBookings) => {
				console.log(fetchedBookings);
				return fetchedBookings;
			});
}

export function fetchBookedDates() {
  return fetch("http://localhost:3001/bookings/dates", {
      host: 'localhost',
      port: 3001,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
			.then((fetchedDates) => {
				return fetchedDates;
			});
}

export function fetchBookingsByDate (date) { 
  return fetch(`http://localhost:3001/bookings/date/${date}`, {
    host: 'localhost',
    port:   3001,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
      .then((fetchedBookings) => {
        return fetchedBookings;
      }); 
}
