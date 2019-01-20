DROP TABLE restaurants;
DROP TABLE reviews;

CREATE TABLE restaurants (
  id BIGSERIAL PRIMARY KEY,
  name varchar(50) NOT NULL,
  menu json NOT NULL
)

CREATE TABLE reviews (
  id BIGSERIAL PRIMARY KEY,
  username varchar(50) NOT NULL,
  restaurant_id int REFERENCES restaurants(id),
  content text NOT NULL,
  order_items json NOT NULL,
  rating int,
  delivery_rating int,
  order_rating int,
  update_date date NOT NULL
)

select (reviews.id, username, restaurants.name, content, order_items, rating, delivery_rating, order_rating, update_date) FROM reviews INNER JOIN restaurants ON restaurants.id = reviews.restaurant_id where reviews.restaurant_id = 221;

DELETE FROM reviews WHERE id = 3450000;

INSERT INTO reviews (id, username, restaurant_id, content, order_items, rating, delivery_rating, order_rating, update_date) VALUES  (3450000, 'john snow', 9, 'This food is dank yo', '[1]', 4, 5, 3, '2018-4-21');

UPDATE reviews SET content = 'Hi JJ' WHERE id = 1200000;

select restaurants.name, reviews.* FROM reviews INNER JOIN restaurants ON restaurants.id=reviews.restaurant_id WHERE reviews.restaurant_id=1111;