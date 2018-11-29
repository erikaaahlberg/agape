const express = require('express'); // Web Framework
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'agape',
})

app.listen(3001, () => {
  console.log('Listening to port 3001!');
})

app.get('/api/bookings', (req, res) => {
    const queryString = "SELECT * FROM bookings";
  
    connection.query(queryString, (err, rows, fields) => {
      if (err) {
        console.log('Failed to get all bookings: ' + err);
        res.sendStatus(500) // Show internal server error
        res.end();
        return;
      }
  
      const bookings = rows.map((row) => {
        return row.date;
      })
      res.json(bookings)
    })
  })