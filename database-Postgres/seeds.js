const faker = require('faker');
const fs = require('fs');
// const restaurantWriter = fs.createWriteStream('restaurant-Post.tsv');
const reviewWriter = fs.createWriteStream('reviews-Post.tsv');


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

const createRestaurant = () => {
  const name = faker.company.companyName();
  const restMenu = JSON.stringify(menu);
  return (`'${name}'\t${restMenu}`);
};

let counter = 20000000;

const createRestaurantData = () => {
  let result = true;
  const entries = 1e7;
  while (counter < entries && result) {
    result = restaurantWriter.write(createRestaurant() + '\n');
    counter += 1;
    if (counter % 100000 === 0) {
      console.log(counter);
    }
  }
  if (counter < entries) {
    restaurantWriter.once('drain', createRestaurantData);
  } else if (counter === entries) {
    counter = 0;
    restaurantWriter.end();
  }
};

// createRestaurantData();

const createReview = () => {
  let day = faker.date.between('2018-1-01', '2019-01-01').toLocaleDateString('en-US');
  let userName = JSON.stringify(faker.internet.userName())
  let restaurantId = faker.random.number({'min': 155001, 'max': 1e7});
  let content = JSON.stringify(faker.lorem.sentences());
  let orderItems = JSON.stringify(getRandomMenuItems());
  let rating = Math.floor(Math.random() * (4)) + 1;
  let deliveryRating = Math.floor(Math.random() * (4)) + 1;
  let orderRating = Math.floor(Math.random() * (4)) + 1;
  
    
  return `${userName}\t${restaurantId}\t${content}\t${orderItems}\t${rating}\t${deliveryRating}\t${orderRating}\t${day}\n`;
};

const createReviewData = () => {
  let result = true;
  const entries = 5e7;
  while (counter < entries && result) {
    result = reviewWriter.write(createReview());
    counter += 1;
    if (counter % 100000 === 0) {
      console.log(counter);
    }
  }
  
  if (counter < entries) {
    reviewWriter.once('drain', createReviewData);
  } else if (counter === entries) {
    counter = 0;
    reviewWriter.end();
  }
};

createReviewData();
