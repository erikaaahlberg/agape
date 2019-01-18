const express = require('express'); // Web Framework
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
var cors = require('cors');
const proxy = require('http-proxy-middleware');
var router = express.Router();

const apiProxy = proxy('/api', { 
  target: 'http://localhost:3001',
 });
app.use('/api', apiProxy);

app.use('/api', router);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
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

/* Get all bookings */
app.get('/bookings', (req, res) => {
  connection.query(
      `SELECT * FROM bookings`,
      (error, data, fields) => {
        if (error) {
          console.log('Failed to get all bookings: ' + error);
          res.sendStatus(500); // Show internal server error
          res.end();
          return;
        }
        const bookings = data.map((row) => {
          return row;
        });
        res.json(bookings);
        res.end();
        //res.send(data);
      }
  );
});

/* Get all bookings from one date */
app.get('/bookings/date/:date', (req, res) => {
  const date = req.params.date;
  connection.query(
      `SELECT date, time FROM bookings WHERE date = ?`, [date],
      (error, data, fields) => {
        if (error) {
          console.log('Failed to get all bookings: ' + error);
          res.sendStatus(500); // Show internal server error
          res.end();
          return;
        }
        const bookings = data.map((row) => {
          return row;
        });
        res.json(bookings);
        res.end();
        //res.send(data);
      }
  );
});


/* Get bookings with duplicate dates */
app.get('/bookings/dates', (req, res) => {
  connection.query(
      `SELECT DISTINCT date FROM bookings`,
      (error, data, fields) => {
        if (error) {
          console.log('Failed to get all bookings: ' + error);
          res.sendStatus(500); // Show internal server error
          res.end();
          return;
        }
        const bookings = data.map((row) => {
          return row;
        });
        res.json(bookings);
        res.end();
        //res.send(data);
      }
  );
});


/* Create booking */
app.post('/bookings/create', (req, res) => {
  console.log(req.body);

  const id = '';
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phone = req.body.phone;
  const category = req.body.category;
  const description = req.body.description;
  const date = req.body.date;
  const time = req.body.time;

  connection.query(
    `INSERT INTO bookings
  (id, firstName, lastName, email, phone, category, description, date, time)
  VALUES (0, ?, ?, ?, ?, ?, ?, ?, ?)`, [firstName, lastName, email, phone, category, description, date, time], (err, results, fields) => {
    if(err){
      console.log('Failed to create new booking: ' + err);
      res.sendStatus(500)
      res.end();
      return;
    }
  })
  res.end();
});


/* Update booking */
app.put('/bookings/update', (req, res) => {
  const id = req.body.id;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phone = req.body.phone;
  const category = req.body.category;
  const description = req.body.description;
  const date = req.body.date;
  const time = req.body.time;

  const queryString =
    `UPDATE bookings
    SET firstName= ?, lastName= ?, email=?, phone=?, category= ?, description= ?,date=?, time= ?
    WHERE id = ?`

  connection.query(`UPDATE bookings
  SET firstName= ?, lastName= ?, email=?, phone=?, category= ?, description= ?,date=?, time= ?
  WHERE id = ?`, [firstName, lastName, email, phone, category, description, date, time, id], (err, results, fields) => {
    if(err){
      console.log('Failed to update booking: ' + err);
      res.sendStatus(500) // Show user internal server error
      res.end();
      return;
    }
  })
  res.end();
});

/* Delete booking */
app.delete('/bookings/delete', (req, res) => {
  const id = req.body.id;
console.log(id);
  const queryString =
    `DELETE from bookings
    WHERE id = ?`

  connection.query(`DELETE from bookings
    WHERE id = ?`, [id], (err, results, fields) => {
    if(err){
      console.log('Failed to delete booking: ' + err);
      res.sendStatus(500) // Show user internal server error
      res.end();
      return;
    }
  })
  res.end();
});

/*

Columns
  id,
  firstName,
  lastName,
  email,
  phone,
  category,
  description,
  date,
  time,
  COUNT(date)

SELECT 
  date,
  COUNT(date)
FROM
    bookings
GROUP BY date
HAVING COUNT(date) > 1 

"SELECT date, firstName, COUNT(*) as count FROM bookings GROUP BY date"
*/
