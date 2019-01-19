const express = require('express'); // Web Framework
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const proxy = require('http-proxy-middleware');
const router = express.Router();

/* Login */
const session = require("express-session");
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
app.use(cors());
app.use(session({
  secret: "thepolyglotdeveloper",
  cookie: {
    secure: true,
    maxAge: 60000
  },
  saveUninitialized: true,
  resave: true
}));

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
      res.sendStatus(500) // Show user internal server error
      res.end();
      return;
    }
  })
  res.end();
});


/* ----- Session handlers for Admin login ----- */
/* Set session variable accessible for all functions */
let thisSession = '';

/* Check for on going session */
app.get('/', (req, res) => {
  console.log(req);
  
  thisSession = req.session;
  if (thisSession.username) {
    connection.query(
      `SELECT id, username, email 
      FROM admin WHERE id = ?`, [session.id], 
      (error, results, fields) => {
        if (error) {
          console.log('Ingen är inloggad!');
          res.sendStatus(500); // Show internal server error
          res.end();
          return {
            active: false
          };
        }
        const activeSession = {
            active: true,
            id: results.id,
            username: results.username,
            email: results.email
        };
        res.json(activeSession);
        console.log('inloggad');
        res.end();
        
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
        }*/
      }
    );
  }
});


/* Login */
app.post('/admin/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  connection.query(
    `SELECT * FROM admin WHERE username = ?`, [username],
    (error, results, fields) => {
      if (results.length > 0) {
        bcrypt.compare(password, results[0].password, function(err, res) {
          if (err) {
            res.send({
              success: false,
              message: 'Felaktigt lösenord, påt igen ba!'
            });
            res.end();
          }
          thisSession = res.map((row) => {
            return {
              active: true,
              id: row.id,
              username: row.username,
              email: row.email
            }
          });
          res.json(thisSession);
          res.end();

        /*bcrypt.compare(password, results[0].password, function (err, result) {
          if (result === true) {
            if (results[0].active === 1) {
              // Sets the user id for session.
              sess = req.session;
              sess.user_id = results[0].id;
              // Success response sent to React app.
              res.send({
                success: true,
                user_id: results[0].id,
                label_name: results[0].label_name
              });
            } else {
              // If password is not correct.
              res.send({
                success: false,
                message: 'Your account is not activated yet'
              });
            }
          } else {
            // If password is not correct.
            res.send({
              success: false,
              message: 'Your password is not correct'
            });
          }*/
        });
      } else {
        // If login fails.
        res.send({
          success: false,
          message: 'Your e-mail or password is not correct'
        });
        res.end();
      }
    }
  );
});


/*

// Log in user.
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    connection.query(
        `SELECT id, label_name, password, active FROM users WHERE email = '${email}'`, 
        (error, results, fields) => { 
            if (results.length !== 0) {
                // Bcrypt is matching the password against the result-hashed-password.
                bcrypt.compare(password, results[0].password, function (err, result) {
                    if (result === true) {
                        if (results[0].active === 1) {
                            // Sets the user id for session.
                            sess = req.session;
                            sess.user_id=results[0].id;
                            // Success response sent to React app.
                            res.send({
                                success: true,
                                user_id: results[0].id,
                                label_name: results[0].label_name
                            });                           
                        } else {
                            // If password is not correct.
                            res.send({
                                success: false,
                                message: 'Your account is not activated yet'
                            });
                        }
                    } else {
                        // If password is not correct.
                        res.send({
                            success: false,
                            message: 'Your password is not correct'
                        });
                    }
                });              
            } else {
                // If login fails.
                res.send({
                    success: false,
                    message: 'Your e-mail or password is not correct'
                });
            }
        }
    );
});

// Log out user.
app.post('/logout', (req,res) => {
    req.session.destroy();
    res.send(true);
});


*/

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
