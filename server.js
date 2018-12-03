const express = require('express'); // Web Framework
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.json());
app.use('/', express.static('public'));
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  port: '8889',
  user: 'root',
  password: 'root',
  database: 'agape'
})

app.listen(3001, () => {
  console.log('Listening to port 3001!')
})

app.get('/bookings', (req, res) => {
  connection.query(
      `SELECT * FROM bookings`,
      (error, data, fields) => {
        if (error) {
          console.log('Failed to get all bookings: ' + err);
          res.sendStatus(500); // Show internal server error
          res.end();
          return;
        }
        const bookings = data.map((row) => {
          return row;
        });
        res.json(bookings);
        res.send(data);
      }
  );
});
/*
app.get('/bookings', (req, res) => {
  console.log("terminal")
  res.send("fetchen")

  
    const queryString = "SELECT * FROM bookings";
    console.log(queryString);
  
    connection.query(
      `SELECT * FROM bookings`,
       (err, rows, fields) => {
      if (err) {
        console.log('Failed to get all bookings: ' + err);
        res.sendStatus(500); // Show internal server error
        res.end();
        return;
      }

      const bookings = rows.map((row) => {
        return row;
      })

      res.json(bookings);
      res.send(bookings);
      return res.json(bookings);
    }) 
  })*/