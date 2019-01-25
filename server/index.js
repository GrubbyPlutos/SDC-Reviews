require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database-Cassandra/controllers.js');
const redis = require('redis');
const client = redis.createClient();

// const { seedDB } = require('../database-MySQL/seeds');
client.on('error', function (err) {
  console.log('Error ' + err);
});
client.on('connect', () => {
  console.log(`You're connected to redis!`);
});
// client.flushdb((err, success) => console.log('all cleared') );
const app = express();
const PORT = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

///////////////MySQL////////////////////////////////

// app.get('/restaurants/:id', (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, '../client/dist/index.html'));
// });

// app.get('/reviews', (req, res) => {
//   // on reviews router get all reviews from the database
//   db.getAllReviews((err, data) => {
//     if (err) {
//       res.status(501).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   });
// });

// app.get('/restaurants/:id/reviews', (req, res) => {
//   // on reviews router get all reviews from the database
//   db.getReviewsByRestaurantId(req.params.id, (err, data) => {
//     if (err) {
//       res.status(501).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   });
// });

// app.get('/reviews/seed', (req, res) => {
//   // seed the data base using and api
//   seedDB();
//   res.status(201).send('seeded the database');
// });

//////////////////////////Cassandra///////////////////////

app.get('/restaurants/:id', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/dist/index.html'));
});


app.get('/restaurants/:id/reviews', (req, res) => {
  client.get(`${req.params.id}`, (err, result) => {
    if (err) {
      res.send(err);
      return;
    }
    if (result !== null) {
      let final = JSON.parse(result);
      res.send(final);
    } else {
      db.getRestaurantName(req.params.id, (errors, data) => {
        if (errors) {
          res.status(501).send(errors);
        } else {
          db.getAllReviews(req.params.id, (error, results) => {
            if (error) {
              throw error;
            } else {
              const combined = data.rows.concat(results.rows);
              client.set(`${req.params.id}`, JSON.stringify(combined), 'EX', 300);
              res.status(200).send(combined);
            }
          });
        }
      });
    }
  });
});

// app.get('/restaurants/:id/reviews', (req, res) => {
//   db.getRestaurantName(req.params.id, (errors, data) => {
//     if (errors) {
//       res.status(501).send(errors);
//     } else {
//       db.getAllReviews(req.params.id, (error, results) => {
//         if (error) {
//           throw error;
//         } else {
//           const combined = data.rows.concat(results.rows);
//           client.set(`${req.params.id}`, combined, 'EX', 300);
//           res.status(200).send(combined);
//         }
// })

app.post('/reviews', (req, res) => {
  db.addReview(req.body, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201);
    }
  });
});

app.delete('/deleteReview', (req, res) => {
  db.deleteReview(req.body, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(202);
    }
  });
});

app.put('/updateReview', (req, res) => {
  db.updateReview(req.body, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
