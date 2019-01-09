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
        res.end();
        //res.send(data);
      }
  );
});

app.post('/create', (req, res) => {
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