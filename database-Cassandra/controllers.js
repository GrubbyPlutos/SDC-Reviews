const db = require('./index.js');

// db.execute(`CREATE KEYSPACE IF NOT EXISTS grubhub WITH REPLICATION = { ‘class’ : ‘SimpleStrategy’, ‘replication_factor’ : 1 };`)
// .then(() =>
// db.execute(`CREATE TABLE IF NOT EXISTS grubhub.reviews(id int primary key, username text, restaurant_id int, content text, order_items text, rating int, delivery_rating int, order_rating int, update_date date);`,
// (err, result) => { 
//     console.log(result);
// }))
// .then(() =>
// db.execute(`CREATE TABLE IF NOT EXISTS grubhub.restaurants(id int primary key, name text, menu text)`, (err, result) => {
//   console.log(result);
// }));

const getRestaurantName = (id, callback) => {
  db.execute(`SELECT (name, menu) FROM grubhub.restaurants WHERE id = ${id}`, (err, results) => {
    if (err) {
      throw err;
    } else {
      callback(null, results);
    }
  });  
};

const getAllReviews = (id, callback) => {
  db.execute(`SELECT * FROM grubhub.reviews WHERE restaurant_id = ${id}`, (err, results) => {
    if (err) {
      throw err;
    } else {
      callback(null, results);
    }
  });
};

const deleteReview = (id, callback) => {
  db.execute(`DELETE FROM grubhub.reviews WHERE id = ${id}`, (err, results) => {
    if (err) {
      throw err;
    } else {
      callback(null);
    }
  });
};

const updateReview = (id, newReview, callback) => {
  db.execute(`UPDATE grubhub.reviews SET content =${newReview} WHERE id = ${id}`, (err, results) => {
    if (err) {
      throw err;
    } else {
      callback(null);
    }
  });
};

const addReview = (form, callback) => {
  db.execute(`INSERT INTO grubhub.reviews (id, username, restaurant_id, content, order_items, rating, delivery_rating, order_rating, update_date) VALUES (${form})`, (err, results) => {
    if (err) {
      throw err;
    } else {
      callback(null);
    }
  });
};

module.exports = {
  getRestaurantName,
  getAllReviews,
  deleteReview,
  addReview,
  updateReview
};

