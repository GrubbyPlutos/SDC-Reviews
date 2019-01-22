const db = require('./index.js');

const getRestaurantName = (id, callback) => {
  db.execute(`SELECT name as restaurant_name, menu FROM grubhub.restaurants WHERE id = ${id}`)
  .then((result) => {
    callback(null, result);
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

