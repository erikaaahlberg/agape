const express = require('express'); // Web Framework
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const proxy = require('http-proxy-middleware');
const router = express.Router();

/* Login */
//const session = require("express-session");
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const apiProxy = proxy('/api', {
  target: 'http://localhost:3001',
});

app.use('/api', apiProxy);
app.use('/api', router);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(cors({
  origin: ["http://localhost:8080"],
  methods:['GET','POST', 'PUT', 'DELETE'],
  credentials: true
}));

/*
app.use(session({
  secret: "itHurtzWhenAhPee",
  cookie: {
    secure: true,
    maxAge: 60000
  },
  saveUninitialized: true,
  resave: true
}));*/

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

/* Get all bookings from one date, in the future admin is supposed to be able to get bookings by date */
app.get('/bookings/date/:date', (req, res) => {
  const date = req.params.date;
  connection.query(
    `SELECT * FROM bookings WHERE date = ?`, [date],
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
    `SELECT DISTINCT date FROM bookings order by date DESC`,
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
      if (err) {
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
    if (err) {
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
    if (err) {
      console.log('Failed to delete booking: ' + err);
      res.sendStatus(500); // Show user internal server error
      res.end();
      return;
    }
  })
  res.end();
});


/* ----- Session handlers for Admin login ----- */
/* Set session variable accessible for all functions */
/*let currentSession;

/* Check for on going session */
/*app.get('/', (req, res) => {

  currentSession = req.session;
  //console.log(currentSession);
  if (currentSession.username) {
    connection.query(
      `SELECT id, username, email 
      FROM admin WHERE id= ?`, [currentSession.id], 
      (err, data, fields) => {
        if (err) {
          console.log('Något gick fel!');
          const response = {
            active: false,
            message: 'Ingen är inloggad!'
          }; 
          console.log(response);
          res.json(response);
          res.end();
        }
        if (data && data.length > 0) {
          const fetchedUser = data.map((row) => {
            return {
              active: true,
              id: row.id,
              username: row.username,
              email: row.email
            };
          });
          currentSession = fetchedUser;
          //res.send(currentSession);
          res.json(currentSession);
          res.end();
        } else {
          const response = {
            active: false,
            message: 'Data kunde ej hittas'
          }; 
          console.log(response);
          res.json(response);
          res.end();
        }
        
        /*if (results) {
          res.send({
            success: true,
            user_id: results[0].id,
            label_name: results[0].label_name
          });
        } else {
          res.send({
            success: false
          });
        }
      }
    );
  }
  res.end();
});*/


/* Login */
app.post('/admin/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
  connection.query(
    `SELECT * FROM admin WHERE username = ?`, [username],
    (error, results, fields) => {
      console.log(results);
      if (error) {
        console.log('Det funkar inte att logga in: ' + error);
        res.sendStatus(500); // Show user internal server error
        res.end();
        return;
      }
      if (results.length > 0) {
        bcrypt.compare(password, results[0].password, function(err, result) {
          if (err) {
            res.send({
              success: false,
              message: 'Något gick väldigt fel, inte ens Erika vet vad.'
            });
          }
          if (result) {
            res.send({
              success: true,
              message: `Kör hårt babe!`,
              username: results[0].username,
              email: results[0].email
            });
          } else {
            res.send({
              success: false,
              message: 'Fel lösenord, påt igen ba!'
            });
          }
        });
      }
    }
  );
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
