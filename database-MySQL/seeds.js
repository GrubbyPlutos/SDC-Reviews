const faker = require('faker');
const db = require('../database-MySQL');

const menu = [
  [1, 'bread', 4.5, ''],
  [2, 'soup', 1.5, 'chicken, peas, carrot, onion'],
  [3, 'california roll', 12, 'Masago, crabmeat, cucumber and avocado'],
  [4, 'B.L.T. Sandwich', 9.75, 'Bacon, lettuce and tomatoes'],
  [5, 'Veggie Burger', 8, 'Served on a toasted bun with coleslaw and pickles'],
];

// function to get random elements from menu array
function getRandomMenuItems() {
  let result = {};
  const randomNum = faker.random.number({'min': 0,'max': 3});
  for (let i = 0; i < randomNum; i++) {
    result[faker.random.number({'min': 1,'max': menu.length})] = '';
  }
  return Object.keys(result);
}

function seedDB() {

  // // generate 100 fake user
  for (let i = 0; i < 100; i++) {
    const userName = faker.internet.userName();
    const userEmail = faker.internet.email();
    const userPassword = faker.internet.password();
    db.query(`INSERT INTO users (name, email, password) VALUES ("${userName}","${userEmail}","${userPassword}");`);
  }


  // // generate 100 fake restaurants
  for (let i = 0; i < 100; i++) {
    const restaurantName = faker.company.companyName();
    const restaurantAddress = faker.address.streetAddress();
    const restaurantPhone = faker.phone.phoneNumber();
    db.query(`INSERT INTO restaurants (name, address, phone, menu) VALUES ("${restaurantName}","${restaurantAddress}","${restaurantPhone}",JSON_ARRAY("${menu}"));`);
  }

  // generate 2000 fake reviews for the first 10 restaurants
  for (let i = 0; i < 2000; i++) {
    const userId = faker.random.number({'min': 1,'max': 100});
    const restaurantId = faker.random.number({'min': 1,'max': 10});
    const content = faker.lorem.sentences();
    const orderItems = getRandomMenuItems();
    const rating = faker.random.number({'min': 1,'max': 5});
    const deliveryRating = faker.random.number({'min': 1,'max': 5});
    const orderRating = faker.random.number({'min': 1,'max': 5});
    let updateDate = faker.date.between('2018-01-01', '2019-01-01');
    updateDate = updateDate.toLocaleDateString('en-US');
    db.query(`INSERT INTO reviews (user_id, restaurant_id, content, order_items, rating, delivery_rating, order_rating, update_date) VALUES (${userId},${restaurantId},"${content}",JSON_ARRAY("${orderItems}"),${rating},${deliveryRating},${orderRating},STR_TO_DATE("${updateDate}","%m/%d/%Y"));`);
  }

  console.log('Successfully seeded the database');
}

module.exports = { seedDB };
