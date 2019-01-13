const bodyParser = require('body-parser');
let cors = require('cors');
var http = require('http');

export function fetchBookings () {
  /*axios.get('http://localhost:3001/bookings').then((res) => {
      console.log('score?');
      console.log(res);
  });*/
  return fetch("http://localhost:3001/bookings", {
      host: 'localhost',
      // port to forward to
      port: 3001,
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
				return fetchedBookings;
			});
}
/*
SELECT  *
FROM    bookings
WHERE   EXISTS
        (
        SELECT  1
        FROM    mytable mti
        WHERE   mti.varchar_column = mto.varchar_column
        LIMIT 1, 1
        )
*/

export function fetchBookedDates() {
  /*axios.get('http://localhost:3001/bookings').then((res) => {
      console.log('score?');
      console.log(res);
  });*/
  return fetch("http://localhost:3001/bookings/dates", {
      host: 'localhost',
      // port to forward to
      port: 3001,
      // path to forward to
      //path:   '/api/bookings',
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
