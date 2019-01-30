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
        res.send({
          success: false,
          message: 'Något har gått fel och inga bokningar hämtades, vänligen försök igen.'
        });
      }

      const bookings = data.map((row) => {
        return row;
      });

      res.json(bookings);
      res.end();
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
        res.send({
          success: false,
          message: 'Något har gått fel och inga bokningar hämtades, vänligen försök igen.'
        });
      }

      const bookings = data.map((row) => {
        return row;
      });

      res.json(bookings);
      res.end();
    }
  );
});


/* Get bookings with duplicate dates */
app.get('/bookings/dates', (req, res) => {
  connection.query(
    `SELECT DISTINCT date FROM bookings order by date DESC`,
    (error, data, fields) => {

      if (error) {
        res.send({
          success: false,
          message: 'Något har gått fel och inga bokningar hämtades, vänligen försök igen.'
        });
      }

      const bookings = data.map((row) => {
        return row;
      });
      
      res.json(bookings);
      res.end();
    }
  );
});


/* Create booking */
app.post('/bookings/create', (req, res) => {
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
      res.send({
        success: false,
        message: 'Något har gått fel och din bokning misslyckades, vänligen försök igen.'
      });
    }

    if (results.length > 0) {
      res.send({
        success: true,
        message: `Härligt ${firstName}, din bokning har blivit genomförd. Jag kommer att kontakta dig för att bestämma en mötesplats. Vi ses ${date} kl. ${time}!`
      });
    }
  })
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

  connection.query(`UPDATE bookings
  SET firstName= ?, lastName= ?, email=?, phone=?, category= ?, description= ?,date=?, time= ?
  WHERE id = ?`, [firstName, lastName, email, phone, category, description, date, time, id], (err, results, fields) => {

    if (err) {
      res.send({
        success: false,
        message: 'Något gick väldigt fel, inte ens Erika vet vad.'
      });
    }

    if (results.length > 0) {
      res.send({
        success: true,
        message: 'Bokningen har blivit uppdaterad.'
      });
    }
  })
});

/* Delete booking */
app.delete('/bookings/delete', (req, res) => {
  const id = req.body.id;

  connection.query(`DELETE from bookings
    WHERE id = ?`, [id], (err, results, fields) => {

    if (err) {
      res.send({
        success: false,
        message: 'Något gick väldigt fel, inte ens Erika vet vad.'
      });
    }

    if (results.length > 0) {
      res.send({
        success: true,
        message: 'Bokningen har blivit raderad.'
      });
    }
  })
});


/* Login */
app.post('/admin/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
  connection.query(
    `SELECT * FROM admin WHERE username = ?`, [username],
    (error, results, fields) => {
      if (error) {
        res.send({
          success: false,
          message: 'Något gick väldigt fel, inte ens Erika vet vad.'
        });
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
			} else {
				res.send({
					success: false,
					message: `Fel användarnamn, traj agajn!`
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
