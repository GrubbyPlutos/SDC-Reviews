const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database-Cassandra/controllers.js');
// const { seedDB } = require('../database-MySQL/seeds');

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
  db.getRestaurantName(req.params.id, (err, data) => {
    if (err) {
      res.status(501).send(err);
    } else {
      db.getAllReviews(req.params.id, (error, results) => {
        if (error) {
          throw error;
        } else {
          const combined = data.rows.concat(results.rows);
          console.log(combined);
          res.status(200).send(combined);
        }
      });
    }
  });
});

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
